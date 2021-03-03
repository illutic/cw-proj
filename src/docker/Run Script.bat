@echo COPY THE SCRIPT FILE TO WHERE YOU HAVE A "TOKEN.txt" FILE!
set /p USERNAME=Enter Github Username: 
cat ./TOKEN.txt | docker login https://docker.pkg.github.com -u %USERNAME% --password-stdin
docker-compose -f skill-finder-docker-compose.yml up