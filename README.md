# Getting started with Playwright on a Mac

To get started with `Playwright`, we need to setup a few things. Mainly, `NodeJS` and `Playwright` itself.

However, `NodeJS` frequently updates so it's highly recommended to use a version manager to install it locally.

The best way to install things on a Mac is usually via `Brew`, so we'll cover that too.

## Installing NodeJS (node)

`node --version`

Run this command to check whether you already have `node` installed, if the command shows the version of `node` then `node` is already install. You may be able to jump directly to installing Playwright.

NodeJS allows Javascript to be run in a non-browser environment. We will need to get it installed.

## Installing Node Version Manager (NVM)

The easiest way to install anything on a Mac is to use brew.

## Installing nvm via brew

Run this command, to check whether brew is already installed

`brew --version`

If this command responds with Homebrew version, then you're good to go. However, if you're getting command not found error then you'll need to install brew with

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Then install nvm via brew with

`brew install nvm`

## Install NodeJS via nvm

After nvm has been installed, NodeJS can be install with

`nvm install {version}` e.g. `nvm install 18`

This will install the latest NodeJS 18 version

Use `node --version` To check the current node version

To swap between versions, try installing NodeJS 20, check the version and

`nvm use 18` to swap back to the LTS version (as of this writting)

## Adding Playwright to a project

It's generally a good idea to add End-to-End Testing next to the code that you're testing against, so that it can be invoked as a part of the pipeline. So, we'll be doing just that!

`npm init playwright@latest`

To learn more about Playwright, visit their [https://playwright.dev/](site)
