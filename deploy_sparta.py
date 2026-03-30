#!/usr/bin/env python3
"""
Deploy Sparta Coatings static site to Hostinger via SSH/SFTP.
Usage: python deploy_sparta.py
"""

import os
import sys
import subprocess
import zipfile
import paramiko
from pathlib import Path

# ── Config ──────────────────────────────────────────────────────────────────
SSH_HOST = "92.112.189.250"
SSH_PORT = 65002
SSH_USER = "u384342620"
SSH_PASS = "Aprilia100!69."
REMOTE_PATH = "/home/u384342620/domains/sparta-coatings.co.uk/public_html"

BUILD_DIR = Path(__file__).parent / "out"
ZIP_NAME = "sparta_deploy.zip"
ZIP_PATH = Path(__file__).parent / ZIP_NAME
REMOTE_ZIP = f"{REMOTE_PATH}/{ZIP_NAME}"


def build():
    print("Building Next.js static export...")
    result = subprocess.run(
        ["npm", "run", "build"],
        cwd=Path(__file__).parent,
        shell=True,
    )
    if result.returncode != 0:
        print("Build failed.")
        sys.exit(1)
    print("Build complete.")


def zip_output():
    print(f"Zipping {BUILD_DIR} -> {ZIP_PATH}")
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        for file in BUILD_DIR.rglob("*"):
            if file.is_file():
                arcname = file.relative_to(BUILD_DIR)
                zf.write(file, arcname)
    size_mb = ZIP_PATH.stat().st_size / 1024 / 1024
    print(f"Zip created: {ZIP_PATH} ({size_mb:.1f} MB)")


def deploy():
    print(f"Connecting to {SSH_HOST}:{SSH_PORT}...")
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(SSH_HOST, port=SSH_PORT, username=SSH_USER, password=SSH_PASS, timeout=30)
    print("Connected.")

    sftp = client.open_sftp()

    # Upload zip
    print(f"Uploading zip to {REMOTE_ZIP}...")
    sftp.put(str(ZIP_PATH), REMOTE_ZIP)
    print("Upload complete.")
    sftp.close()

    # Extract and clean up on server
    commands = [
        f"cd {REMOTE_PATH} && unzip -o {ZIP_NAME} -d .",
        f"cd {REMOTE_PATH} && rm -f {ZIP_NAME}",
        f"find {REMOTE_PATH} -name '*.map' -delete",
    ]
    for cmd in commands:
        print(f"$ {cmd}")
        stdin, stdout, stderr = client.exec_command(cmd)
        out = stdout.read().decode().strip()
        err = stderr.read().decode().strip()
        if out:
            print(out)
        if err:
            print(f"STDERR: {err}")

    client.close()
    print("\nDeployment complete. https://www.sparta-coatings.co.uk")


def cleanup_local():
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
        print("Local zip cleaned up.")


if __name__ == "__main__":
    build()
    zip_output()
    deploy()
    cleanup_local()
