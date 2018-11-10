# Do Not Track requests

## What is Do Not Track?

According to the Electronic Frontier Foundation, the non-profit digital rights group:

> Do Not Track (DNT) is a way to keep users’ online behavior from being followed across the Internet by behavioral advertisers, analytics companies, and social media sites. It combines both technology (a way to let users signal whether they want to be tracked) as well as a policy framework for how companies should respond to that signal.

On enabling DNT, your browser sends a special header with every request (`HTTP_DNT`), indicating that you do not want to be tracked. The header lets users indicate whether they would prefer privacy rather than personalized content.

## Does enabling Do Not Track actually help on the web?

Yes and no. It is up to the website to honor your Do Not Track request. It is still optional and requires effort from web developers and legislators to enable it worldwide. The problem is that a lot of websites simply ignore the header in your request and continue to track you.

Currently, Do Not Track is completely voluntary. In the future, it’s possible that some countries will pass laws forcing websites to obey this preference. It’s also possible that some advertising or business organizations may require their members to obey this setting.

## Does Agastya by Oswald Labs honor Do Not Track requests?

**Absolutely.** We not only stop tracking your information, but also clearly show you whether Do Not Track is enabled or not in the plugin settings. When Do Not Track is enabled, we completely anonymize your data before sending it to our server for analytics. Your IP address goes through a one-way undecryptable hash function, and, as a result, it is impossible to individually track you.

As part of our effort for GDPR compliancy, this option is enabled by default for all our users who do not explicitly give us permission for tracking them in the plugin settings. By default, we treat all request as Do Not Track requests.

## How do I enable Do Not Track?

Follow the instructions for your your platform and web browser to enable Do Not Track.

### Mobile

In addition to browser controls mentioned below, many phones have a separate DNT setting for mobile apps. Note that setting your browser to DNT does not necessarily affect your DNT setting for apps. To make sure you are not tracked, you must turn on BOTH of these options.

#### Opera

Opera's Mini Browser does not currently have a Do Not Track feature available.

#### Firefox

Firefox’s Do-not-track feature is turned off by default. To turn it on, scroll and find the Settings application. Find and tap the Do Not Track item, under the Privacy & Security category. Tap the circle right of the Do Not Track label to enable or disable this feature.

#### Internet Explorer

For Windows Phone 8: In the App list, tap Settings, flick left to Applications, tap Internet Explorer, and then tap Advanced Settings. Then select or clear the “Send a Do Not Track request to websites you visit” check box to enable or disable this feature.

For Windows Phone 7: In Internet Explorer, tap More > Settings. (You can also access Internet Explorer’s settings through Settings on the App list.) From there you can select or deselect “Allow Internet Explorer to collect my browsing history.”

#### Chrome

To turn on or off DNT in Chrome, go to Chrome menu > Settings > (Advanced) Privacy, then select your preferred option for “Do Not Track.”

#### Safari

There are two ways to turn on Do Not Track on iOS. On iOS 6 or 7, you can adjust Safari’s Do Not Track setting is in Settings > Safari > “Private Browsing.” (On iOS 7, the setting is simply labeled “Do Not Track.”) Enabling private browsing will also turn on Do Not Track.

### Desktop

#### Opera

Opera’s Do Not Track setting is in Settings > Privacy and Security. Selecting the box labeled “Send a ‘Do Not Track’ request with your browsing traffic” will enable Do Not Track.

#### Chrome

Click the “Tools” menu, represented by the icon with three horizontal lines on the upper right-hand side of the Chrome window, and then click Settings. At the bottom of the Settings page, click Advanced Settings. At the bottom of the page a “Privacy” heading appears. Under the Privacy heading, check the box next to “Send a ‘Do Not Track’ request with your browsing traffic.” Click OK to activate DNT.

#### Internet Explorer

On the menu bar at the top of your screen, click the Tools button, which is shaped like a gear. Point to Safety, and then click Tracking Protection. Within the Tracking Protection List, Click Your Personalized List, and then click the Enable button that appears in the lower right-hand corner of the box.

#### Firefox

For Windows PCs, at the top of the Firefox window, click on the Firefox button and then select Options. Then, navigate to the Privacy tab and choose “Tell sites that I do not want to be tracked.” Click OK to close the Options window and enable DNT.

For Macs, on the menu bar at the top of the screen, click on Firefox > Preferences. Navigate to the Privacy tab and choose the option “Tell web sites I do not want to be tracked” to enable DNT.

#### Safari

For Safari 6, adjust DNT settings by completing the following steps: On the menu bar at the top of the screen, click on Preferences. Navigate to the Privacy tab, then check or uncheck the box labeled Website tracking: “Ask websites not to track me.”

## Related links
- [Do Not Track - Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [All About DNT](https://allaboutdnt.com/)