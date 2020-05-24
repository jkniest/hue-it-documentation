# Getting started

> Short introduction about how easy it is

## Installation

```shell script
composer install jkniest/hue-it
```

## Usage (Local bridge)

> Quick code example of how to use it and how to
> authenticate. Something like:

```php
$hue = new PhillipsHue('123.456.78.9');
$hue->authenticate(); // Press LINK button

$hue->getLight(3)->turnOn();
```


## Usage (Cloud)

> Quick code example of how to use it and how to
> authenticate. Something like:

```php
$client = new HueClient('id', 'secret');
$device = new HueDevice('id', 'name');

$hue = new PhillipsHueCloud($client, $device, 'app-id');
$hue->getOAuthUrl(); // Open in browser

$hue->authenticate('code');

$hue->getLight(3)->turnOn();
```

