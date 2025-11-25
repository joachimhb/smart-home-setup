# bath-control

## raspi setup

### installations

```sh
sudo apt-get update
sudo apt-get install -y samba
sudo apt-get install -y vim
sudo apt-get install -y git
sudo apt-get install -y build-essential
sudo apt-get install -y unzip
sudo apt-get install -y make
sudo apt-get install -y gcc
sudo apt-get install -y g++
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash
```

### swap
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab

### pigpio

```sh
wget https://github.com/joan2937/pigpio/archive/master.zip
unzip master.zip
cd pigpio-master
make
sudo make install
```

### hostname

sudo hostnamectl set-hostname XXX

### samba

```sh
sudo smbpasswd -a <user_name>
```

/etc/samba/smb.conf

```
[shared]
path = /home/<user_name>/shared
available = yes
valid users = <user_name>
read only = no
browsable = yes
public = yes
writable = yes
```

```sh
sudo service smbd restart
```

### docker

#### install

```shell
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/debian
Suites: $(. /etc/os-release && echo "$VERSION_CODENAME")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

#### dns

/etc/docker/daemon.json

```json
{
    "dns": ["10.0.0.2", "8.8.8.8"]
}
```

### nfs

```sh
sudo apt install net-tools
sudo apt update
sudo apt install nfs-kernel-server
```

### nobara

/etc/fstab

```shell
UUID=509e3e9b-c509-4a5c-8560-8b90b58752ef /boot          ext4    defaults   0 2
UUID=e70f8f25-37af-469c-bfc0-fef50800d979 /              btrfs   subvol=/@,compress=zstd:1,x-systemd.device-timeout=0 0 0

/mnt/local_data/home /home none bind 0 0
UUID=c167cca7-7d2a-47a0-938d-0bde860069fc swap           swap    defaults   0 0
tmpfs                                     /tmp           tmpfs   defaults,noatime,mode=1777 0 0
UUID=54495efe-498d-4a85-ae73-f51511bd16c7 /mnt/local_data ext4   defaults 0 0

# old
#UUID=e70f8f25-37af-469c-bfc0-fef50800d979 /home2          btrfs   subvol=/@home,compress=zstd:1,x-systemd.device-timeout=0 0 0
#UUID=e70f8f25-37af-469c-bfc0-fef50800d979 /home          btrfs   subvol=/@home,compress=zstd:1,x-systemd.device-timeout=0 0 0


```