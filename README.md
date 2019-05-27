## Contents

  * [iZettle Integrations](#izettle-integrations)
  * [Available Integrations](#available-integrations)
  * [Getting Started](#getting-started)
    * [Requirements](#requirements)
    * [Setup](#setup)

### iZettle Integrations

This is a collection of scripts for running as serverless function, that act as a middleman between iZettle and downstream services.

### Available Integrations

| Source | Integration | Sink |
| -------| ----------- | ---- |
| Pusher API from iZettle Events | AWS Lambda/Hook IO | Slack Webhooks and Channels |

### Getting Started

#### Requirements

I am using the izettle API with private `client_id` and `client_secret` so you will need to request one for your account.

- [iZettle API Docs](https://github.com/iZettle/api-documentation)
- [iZettle API Credential Requests](https://www.izettle.com/api-access/)

#### Setup

These scripts are currently a WIP so there is no deploy steps.

- It should be possibl to one click deploy my scripts to AWS lambda and other integrations.
