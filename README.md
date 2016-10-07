Cryptocoins
===========

**Cryptocoins is the most complete free vector/webfont iconpack of your favourite cryptocurrencies.**

Available both in pure vector SVG and webfont formats for taking advantage of small file sizes and unlimited scalability, Cryptocoins are perfect for usage on the web – right where they belong. Use them all or just the ones you need.

----

**IMPORTANT:** Since 2.0 update, you need to implement icons via ```class="cc BTC"``` instead of ```cc-BTC```, otherwise they won't work. Why? This way they will work well with other iconpacks (like Font Awesome).

![Cryptocoins Preview](cryptocoins-preview.png)

Docs & Demo
-------------------------

* **Demo**: [labs.allienworks.net/icons/cryptocoins](http://labs.allienworks.net/icons/cryptocoins)
* **Download**: [allienworks.net/products/cryptocoins](https://allienworks.net/products/cryptocoins/)


Requesting new coins/icons
--------------------------

Initial release contains just a fraction of Altcoins. If you're missing your coin, please let me know so I can include it in next release. Since there are many requests lately and I can hardly keep up, **I have to ask you to follow these guidelines**:

1. [open a new issue](https://github.com/allienworks/cryptocoins/issues/new) in this repo
2. include full coin name and ticker symbol in the issue title
3. link current logo image in the description (you can also include BitcoinTalk thread of your coin, so I can post it there once the release is complete)
4. (optional) you can notify me on [@AllienWorks](https://twitter.com/AllienWorks) Twitter (also, helps spreading the word)

**E.g.** – issue title: "Bitcoin (BTC)", description: "Could you please add Bitcoin? Current logo here: https://bitcoin.org/img/icons/opengraph.png, thanks very much ;)"

**This is all completely voluntary work**, so if you want to support my efforts _or_ speed up the addition of your coin, please donate. Donation addresses are found below (if you don't see your coin, let me know and I'll send the address afterwards).


Installation
------------

### Download 

Download Cryptocoins and extract its contents.

### Webfont version

Webfont is ideal when you want to use majority of Cryptocoins icons. Copy "fonts" folder and "cryptocoins.css" styles to your project and link Cryptocoins CSS in your project (you can optionally include also "cryptocoins-colors.css" if you want to use predefined colors):

``` html
<!-- CSS defining icons (required) -->
<link rel="stylesheet" href="css/cryptocoins.css">

<!-- CSS defining icon/coin colors (optional) -->
<link rel="stylesheet" href="css/cryptocoins-colors.css">
```

Then insert your icons in HTML, e.g.:

> Important: Since 2.0 update, you need to implement icons via class="cc BTC" (with a space) instead of class="cc-BTC" (with a hyphen), otherwise they won't work. Why? This way they will work well with other iconpacks (like Font Awesome).

``` html
<i class="cc BTC"></i>
```

If you're familiar with Font Awesome, it's pretty much the same. You'll find the CSS references on top of this page or in demo file (included in download).

### SVG version

SVG is better option, if you want to use just a few icons (including whole webfont would be data-inefficient. Find the icons you need in "SVG" folder and copy them to your project. Then use them as regular images:

``` html
<img src="img/BTC.svg" alt="Bitcoin">
```

**Tip:** You can also open each SVG icon in text editor and copy its contents directly into HTML, resulting in fewer HTTP requests and ability to style icons direcly via CSS. There are also [many scripts](http://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement) that do the same automatically – your choice.

### Still lost?

Having troubles and can't get it working? I'm here for you! Go ahead and write me at [@AllienWorks](https://twitter.com/AllienWorks) or [0x98EC204D](https://keybase.io/martin_allien).


Author
------

**Martin Allien**

* Website: [allienworks.net](https://allienworks.net)
* Keybase: [martin_allien](https://keybase.io/martin_allien)

Tip me crypto and **support further development**:

* [Bitcoin](https://bitcoin.org/en): ```1JHdnyyHC1ioxVhjbQb9eVcYLJUxH1njpY```
* [ShadowCash](http://aboutshadow.com): ```STAKEbLd2DecHRadoXyBE5jmZrJztLr9TE```
* [Decred](https://www.decred.org): ```DsbP825Rna7sT6CfyKQSjm1AwzHtqeGjkJX```
* [Ethereum](https://www.ethereum.org): ```0xba356f88f126aa0d0f25ef8a43c9fb19471646f8```
* [Ethereum Classic](https://ethereumclassic.github.io): ```0x9a61ab388beb6dec3b58904f474ff0fc08de8615```
* [Verge](http://vergecurrency.com): ```DTQnniFjYJUYs1puAFuhEJAYJevP9BTvEt```
* [Blackcoin](http://blackcoin.co): ```BJjg8cNiDsf66mgw1dga4h37jGA9v5MeNj```
* [Dash](https://www.dash.org): ```XqZ2KbnnwVzD6CGPot7ntwf3cevfGeQorG```
* [Litecoin](https://litecoin.org): ```LNwiWXK8kb8jVKv9ioVfbiqA4puyBkUXg4```

Follow for updates and more stuff:

* Twitter: [@AllienWorks](https://twitter.com/AllienWorks)


Updates
-------

| Version | Changes |
| :------ | :------ |
| **2.1** | updated Peercoin (PPC), added AudioCoin (ADC), Bitsend (BSD), The DAO (DAO), Europecoin (ERC), Ethereum Classic (ETC), Goldcoin (GLD), Groestlcoin (GRS), Kobocoin (KOBO), LBRY (LBC), Pinkcoin (PINK), Reddcoin (RDD), RISE (RISE), Sia (SIA), Salus (SLS), SynergyCoin (SNRG), Steem (STEEM), Stratis (STRAT), BitSwift (SWIFT) |
| **2.0** | tweaked styles for **separate namespace** (see issue #7), fixed Ripple (XRP) typo, added Digitalcoin (GDC), DigixDAO (DGD/DGX), Facton (FCT), Jumbucks (JBS), Lisk (LISK), PiggyCoin (PIGGY), Rubies (RBIES), Sarcoin (SAR), SterlingCoin (SLG), Tether (USDT), Zeitcoin (ZEIT) |
| **1.6** | added Aeon (AEON), Synereo (AMP), Anoncoin (ANC), Bata (BTA), Clams (CLAM), Cloakcoin (CLOAK), Decred (DCR), Neos (NEOS), Gulden (NLG), OKcash (OK), Omni (OMNI), Scotcoin (SCOT), Storj (SJCX), Startcoin (START), Syscoin (SYS), Transfercoin (TX), Vanillacoin (VNL), Verge (XVG), updated Rubycoin (RBY) |
| **1.5** | added DigiByte (DGB), DogeCoinDark (DOGED), EmerCoin (EMC), Ethereum (ETH), MintCoin (MINT), MonaCoin (MONA), MicroCoin (MRC), NeuCoin (NEU), Novacoin (NVC), Rubycoin (RBY), updated BitBay |
| **1.4** | added BitBay (BAY), Diamond (DMD), Franko (FRK), I/O Coin (IOC), LiteDoge (LDOGE), MasterTraderCoin (MTR), Monetary Unit (MUE), Sapience AIFX (XAI), Primecoin (XPM), updated BitStake (XBS) |
| **1.3** | updated Darkcoin → Dash, added Infinitecoin (IFC), Vertcoin (VTC), NEM (XEM), DNotes (NOTE), Rimbit (RBT), GetGems (GEMZ), VeriCoin (VRC), ARCHcoin (ARCH), BitStake (XBS) |
| **1.2.1** | added optional ```cryptocoins-colors.css``` for **coloring** all icons/coins |
| **1.2** | added Bytecoin (BCN), Gridcoin (GRC), KoreCoin (KORE), MaidSafeCoin (MAID), Quark (QRK), SuperNET (UNITY), Viorcoin (VIOR), VPN coin (VPN) + updated BitShares (BTSX → BTS) |
| **1.1** | added Stellar (STR), FuelCoin (FC2), BanxShares (BANX), NuBits/NuShares (NBT/NSR), BitcoinDark (BTCD), YbCoin (YBC), BlackCoin (BC), Mastercoin (MSC), Feathercoin (FTC), Sync (SYNC), PotCoin (POT), OpalCoin (OPAL), Shadow (SDC) |
| **1.0** | added Bitcoin (BTC), Litecoin (LTC), Namecoin (NMC), Dogecoin (DOGE), Peercoin (PPC), Darkcoin (DRK), Ripple (XRP), Bitshares (BTSX), Counterparty (XCP), NXT (NXT), Monero (XMR) |


Licence
-------

Released under [GNU GPL v2.0](LICENCE)
