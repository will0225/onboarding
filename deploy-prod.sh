#!/bin/bash

cd /home/app/booka-backend/booka-website-onboarding && git reset --hard && git pull && cd /home/app/booka-backend && docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d --no-deps onboarding