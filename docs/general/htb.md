---
sidebar_position: 2
---

# Hack the Box

Methodology for solving boxes on Hack the Box. 

## Initial Recon
* Scan the ports with nmap
* Use either telnet or netcat to grab the banners of ports
* Enumerate files and folders (if there is a web server)
* Read through the source code of the web pages
* Enumerate subdomains (make sure to add a domain name to /etc/host on your machine)
* Use Wappalyzer to recon technologies the website uses
* Use the proper tools to connect to open ports on the box
* Take note of every version number you come across and look up on Internet if there are exploits for these versions
* Take note of usernames, email addresses and names
* Access file sharing systems (SMB, FTP, RSYNC, ...)
* Attempt to exploit most relevant web vulnerabilites depending on the web server (SQL injection, cross-site scripting, local file inclusion, ...)

## Privilege Escalation
* Users on the system: personal files, privileges and permissions, history, ...
* Version numbers (OS, software, services, ...)
* Inspect the root folder of the web server (if there is one running on the machine)
* Common files and folders: `/etc/passwd`, `C:\Program Files\`, `/var/log/.../`
* Open ports bound to localhost (e. g. : localhost:3000)
* Active programs, services, conjobs, scheduled tasks, nonstandard programs
* User's private SSH keys (~/.ssh/authorized_keys) or write your own SSH private key
* System config: $PATH, SUID binaries, sudo rights (sudo -l)
* Writable, recently modified and nonstandard files
* Common attack vectors such as buffer overflows, misconfigurations, ...

## Tips & Tricks
* Have a Windows virtual machine if the box is running Windows
* Test the vulnerable software (e. g. : GitLab, SharePoint, ...) on your local machine to understand how it works and how to use it
* Compile Windows binaries with `mingw32`
* Execute Windows binaries with Wine
* If the webserver is running on HTTPS, check if the TLS certificate discloses subdomain names

## How to Get Unstuck
* Read the manual page/docs
* Make sure you performed an exhautive recon
* Make sure you run commands using the correct parameters and options
* Ask [Ippsec](https://ippsec.rocks)
* Consult write-ups of retired machines
* Pay attention to new technologies
* Read blogposts on new vulnerabilites
