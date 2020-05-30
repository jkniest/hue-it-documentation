# Getting started

You can use the hue it wrapper for both local network connections
or using the cloud.

## Installation

Simply install this package via composer and you're ready to go:

```shell script
composer install jkniest/hue-it
```

## Usage (Local bridge)

First, you'll need to figure out the IP address of your bridge. You can
find the IP address in your router.

Also, you need physical access to your bridge.

Below is an example how we might connect to a bridge on the
ip address `123.456.78.9`. After calling the `authenticate` method
the application waits until you press the LINK button
on your bridge.

```php
$hue = new PhillipsHue('123.456.78.9');
$hue->authenticate(); // Press LINK button

$hue->getLight(3)->turnOn();
```

Of course you can reuse the generated username. See [Local authentication](/authentication/local/)
for more information.

## Usage (Cloud)

Using the hue cloud is a little more complex than the local network.
First, you'll need to [create a Phillips hue app](https://developers.meethue.com/my-apps/).

After creating the app you'll have access to client credentials (id and secret)
and an app ID. We need both to connect via cloud. The device id and name can be chosen
as you like.

We recommend that you'll read the basics of [OAuth2](https://oauth.net/2/)
before continuing.

For more information see [Cloud authentication](/authentication/cloud/).

```php
$client = new HueClient('id', 'secret');
$device = new HueDevice('id', 'name');

$hue = new PhillipsHueCloud($client, $device, 'app-id');
$hue->getOAuthUrl(); // The user must open this url in the browser.

$hue->authenticate('code');

$hue->getLight(3)->turnOn();
```

