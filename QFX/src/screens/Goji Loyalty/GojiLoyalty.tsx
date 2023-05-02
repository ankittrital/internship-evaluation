import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {verticalScale, moderateScale} from '@utils/Dimensions';
import React, {FC, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @GojiLoyalty
 **/

const GojiLoyalty: FC<IProps> = () => {
  const {container, headerContainer, headerTextStyle, gojiStyle} = styles;

  const [htmlContent, setHtmlContent] = useState('');
  useEffect(() => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta name="viewport" content="initial-scale=1.0">
    </head>
    
    <body style='text-align:left'>
        <h4><strong>Goji</strong></h4>
        <p>Goji is a card-less free loyalty program that offers customers/shoppers with rewards when they make purchase at
            the participating Stores.</p>
        <h4><strong>Benefits of Goji Loyalty with QFX Cinemas</strong></h4>
        <ul>
            <li>For every Rupees spent on tickets at QFX Cinemas, you can earn Points &amp; Coins with Goji.</li>
            <li>Goji Loyalty helps you get rewarded for the value of amount you spend on your tickets.</li>
            <li>Customers’ can redeem free tickets with the collected QFX Points &amp; Goji Coins</li>
            <li>QFX Cinemas will also give you attractive Offers through Goji Loyalty App.</li>
        </ul>
        <h4><strong>Sync, QFX Cinemas with Goji Loyalty</strong></h4>
        <ul>
            <li>QFX Cinemas customers’ can Register and Log in with Goji Loyalty, through their QFX Cinemas account.</li>
            <li>QFX Cinemas account &amp; Goji Loyalty account gets synchronized once the customer Logs in.</li>
            <li>All the ticket purchases transactions will get transferred to customers’ Goji Loyalty account.</li>
        </ul>
        <h4><strong>Earn QFX Points &amp; Goji Coins </strong></h4>
        <ul>
            <li>For every Rupees spent on tickets at QFX Cinemas, you can earn QFX Points with Goji.</li>
            <li>Also, you earn 2% of your spent amount on tickets as Goji Coins.</li>
            <li>Example: You spent Rs. 3000 on ticket purchases
                <ul>
                    <li>You earn 3000 QFX Points <em>(QFX Points can only be used at QFX Cinemas)</em></li>
                    <li>Plus, you earn 2% of Rs. 3000 i.e. 60 Goji Coins <em>(Goji Coins can be used at any store under Goji
                            Loyalty)</em></li>
                </ul>
            </li>
        </ul>
        <h4><strong>QFX Points</strong></h4>
        <ul>
            <li>For every Re. 1 spent on tickets at QFX Cinemas the customers can Earn Points.</li>
            <li>QFX Points can only be redeemed at QFX Cinemas.</li>
            <li>Customers’ can track their accumulated Points by visiting their Points Page on Goji.</li>
            <li>Conversion rate for QFX Points is 7% of the earned Coins.
                <ul>
                    <li>Example: You earned 3000 QFX Points from the above transaction (7% of 3000 = 210 Goji Coins worth of
                        value)</li>
                </ul>
            </li>
            <li>Points do not have cash value, are not redeemable for cash and are not transferable.</li>
        </ul>
        <h4><strong>Goji Coins </strong></h4>
        <ul>
            <li>Goji Coins are the in-App currency.</li>
            <li>Goji Coins can be used in any and all stores/businesses using Goji.</li>
            <li>1 Goji Coin is always equivalent to Re. 1</li>
            <li>Goji Coins are not redeemable for cash and are not transferable.</li>
            <li>Customers’ can track their actual accumulated Goji Coins by visiting Coins page in Page on Goji Loyalty App.
            </li>
        </ul>
        <h4><strong>Goji Coins as Payment Method</strong></h4>
        <ul>
            <li>Collected QFX Points &amp; Goji Coins can be used to redeem free ticket/s.</li>
            <li>QFX Points will get converted to Goji Coins to show customers’ the worth value of the QFX Points, for
                customers’ convenience to redeem free tickets.</li>
            <li>When a customer uses Goji Coins to buy the ticket/s the amount cannot be refunded.</li>
        </ul>
        <h4><strong>Conversion of QFX Points to Goji Coins of worth value</strong></h4>
        <ul>
            <li>Example: You Spent Rs. 3000. Earned 3000 QFX Points &amp; 60 Goji Coins.
                <ul>
                    <li>Conversion : QFX Points 3000*7%&nbsp; = 210 Goji Coins* <em>(*Converted points can only be used at
                            QFX Cinemas)</em></li>
                </ul>
            </li>
            <li>Converted Points + Goji Coins will get added up for the customers’ to see the value.
                <ul>
                    <li>Goji Balance 210 Goji Coins(worth value) + 60 Goji Coins = 270 Coins &nbsp;</li>
                </ul>
            </li>
        </ul>
        <h4><strong>Redeeming Free Loyalty tickets</strong></h4>
        <ul>
            <li>In the Payment method, Goji Coins will appear as 270 Coins.</li>
            <li>Customers can buy ticket/s worth up to Rs. 270, with QFX Cinemas.</li>
        </ul>
        <h4><strong>No of tickets redemption </strong></h4>
        <ul>
            <li>Customers are allowed to redeem
                <ul>
                    <li>2 tickets during weekdays.</li>
                    <li>1 ticket during weekends.</li>
                </ul>
            </li>
        </ul>
        <h4><strong>Goji Loyalty App: QFX Cinemas Offers</strong></h4>
        <ul>
            <li>QFX Cinemas will list their offers on Goji Loyalty App.</li>
            <li>Customers can redeem these Offers using their QFX Points or Goji Coins.</li>
        </ul>
        <h4><strong>For more information on Goji Loyalty for QFX Cinemas:</strong></h4>
        <p>Website: <a href="http://www.goji.com.np/">https://www.goji.com.np</a></p>
        <p>Facebook page: <a href="https://www.facebook.com/gojiloyalty/">https://www.facebook.com/gojiloyalty</a></p>
        <p>Helpline: 9813876466</p>
        <p>Email: <a href="mailto:gojiloyalty@qfxcinemas.com">gojiloyalty@qfxcinemas.com</a></p>
    </body>
    
    </html>`;
    setHtmlContent(html);
  }, []);

  return (
    <View style={container}>
      <View style={headerContainer}>
        <Text style={headerTextStyle}>GOJI LOYALTY</Text>
      </View>
      <View style={gojiStyle}>
        <WebView
          source={{html: htmlContent}}
          style={{flex: 1, backgroundColor: 'transparent'}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  headerContainer: {
    backgroundColor: colors.offWhite,
    elevation: 5,
    width: '100%',
    height: verticalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(15),
  },
  headerTextStyle: {
    fontFamily: Fonts.type.poppinsregular,
    fontSize: moderateScale(20),
    color: colors.cinemasNameText,
    letterSpacing: moderateScale(1),
  },
  gojiStyle: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
});

export default GojiLoyalty;
