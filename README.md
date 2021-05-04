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

#### dns

/etc/docker/daemon.json

```json
{
    "dns": ["10.0.0.2", "8.8.8.8"]
}
```