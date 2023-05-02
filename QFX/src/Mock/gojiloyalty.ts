export interface LoyaltyType {
  heading: string;
  desc: string;
}

export interface LoyaltyDescription {
  title: string;
  termsAndConditions: string[];
}

export const loyalty: LoyaltyType[] = [
  {
    heading: 'Goji',
    desc: 'Goji is a card-less free loyalty program that offers customers/shoppers with rewards when they make purchase at the participating Stores.',
  },
];

export const loyaltyProgram = [
  {
    title: 'Benefits of Goji Loyalty with QFX Cinemas',
    termsAndConditions: [
      {
        point:
          'For every Rupee spent on tickets at QFX Cinemas, you can earn Points & Coins with Goji.',
      },
      {
        point:
          'Goji Loyalty helps you get rewarded for the value of the amount you spend on your tickets.',
      },
      {
        point:
          'Customers can redeem free tickets with the collected QFX Points & Goji Coins',
      },
      {
        point:
          'QFX Cinemas will also give you attractive offers through Goji Loyalty App.',
      },
    ],
  },
  {
    title: 'Sync, QFX Cinemas with Goji Loyalty',
    termsAndConditions: [
      {
        point:
          'QFX Cinemas customers can Register and Log in with Goji Loyalty, through their QFX Cinemas account.',
      },
      {
        point:
          'QFX Cinemas account & Goji Loyalty account gets synchronized once the customer logs in.',
      },
      {
        point:
          'All the ticket purchase transactions will get transferred to customers Goji Loyalty account.',
      },
    ],
  },
  {
    title: 'Earn QFX Points & Goji Coins',
    termsAndConditions: [
      {
        point:
          'For every rupee spent on tickets at QFX Cinemas, you can earn QFX Points with Goji.',
      },
      {
        point:
          'Also, you earn 2% of your spent amount on tickets as Goji Coins.',
      },
      {
        point: 'Example: You spent Rs. 3000 on ticket purchases',
        subterm: [
          {
            point:
              'You earn 3000 QFX Points (QFX Points can only be used at QFX Cinemas)',
          },
          {
            point:
              'Plus, you earn 2% of Rs. 3000 i.e. 60 Goji Coins (Goji Coins can be used at any store under Goji Loyalty)',
          },
        ],
      },
    ],
  },
  {
    title: 'QFX Points',
    termsAndConditions: [
      {
        point:
          'For every Re. 1 spent on tickets at QFX Cinemas the customers can earn points.',
      },
      {
        point: 'QFX Points can only be redeemed at QFX Cinemas.',
      },
      {
        point:
          'Customers can track their accumulated Points by visiting their Points Page on Goji.',
      },
      {
        point: 'Conversion rate for QFX Points is 7% of the earned Coins.',

        subterm: [
          {
            point:
              'Example: You earned 3000 QFX Points from the above transaction (7% of 3000 = 210 Goji Coins worth of value)',
          },
        ],
      },
      {
        point:
          'Points do not have cash value, are not redeemable for cash and are not transferable.',
      },
    ],
  },
  {
    title: 'Goji Coins',
    termsAndConditions: [
      {
        point: 'Goji Coins are the in-App currency.',
      },
      {
        point:
          'Goji Coins can be used in any and all stores/businesses using Goji.',
      },
      {
        point: '1 Goji Coin is always equivalent to Re. 1',
      },
      {
        point:
          'Goji Coins are not redeemable for cash and are not transferable.',
      },
      {
        point:
          'Customers can track their actual accumulated Goji Coins by visiting Coins page in Goji Loyalty App.',
      },
    ],
  },
  {
    title: 'Goji Coins as Payment Method',
    termsAndConditions: [
      {
        point:
          'Collected QFX Points & Goji Coins can be used to redeem free ticket/s.',
      },
      {
        point:
          'QFX Points will get converted to Goji Coins to show customers the worth value of the QFX Points, for customers convenience to redeem free tickets.',
      },
      {
        point:
          'When a customer uses Goji Coins to buy the ticket/s the amount cannot be refunded.',
      },
    ],
  },
  {
    title: 'Conversion of QFX Points to Goji Coins of worth value',
    termsAndConditions: [
      {
        point:
          'Example: You Spent Rs. 3000. Earned 3000 QFX Points & 60 Goji Coins.',
        subterm: [
          {
            point:
              'Conversion : QFX Points 3000*7%  = 210 Goji Coins* (*Converted points can only be used at QFX Cinemas)',
          },
        ],
      },
      {
        point:
          'Converted Points + Goji Coins will get added up for the customers to see the value.',
        subterm: [
          {
            point:
              'Goji Balance 210 Goji Coins(worth value) + 60 Goji Coins = 270 Coins ',
          },
        ],
      },
    ],
  },
  {
    title: 'Redeeming Free Loyalty tickets',
    termsAndConditions: [
      {
        point: 'In the Payment method, Goji Coins will appear as 270 Coins.',
      },
      {
        point:
          'Customers can buy ticket/s worth up to Rs. 270, with QFX Cinemas.',
      },
    ],
  },
  {
    title: 'No of tickets redemption',
    termsAndConditions: [
      {
        point: 'Customers are allowed to redeem',
        subterm: [
          {point: '2 tickets during weekdays.'},
          {point: '1 ticket during weekends.'},
        ],
      },
    ],
  },
  {
    title: 'Goji Loyalty App: QFX Cinemas Offers',
    termsAndConditions: [
      {
        point: 'QFX Cinemas will list their offers on Goji Loyalty App.',
      },
      {
        point:
          'Customers can redeem these Offers using their QFX Points or Goji Coins.',
      },
    ],
  },
];

export const loyaltyEnd = [
  {
    headingEnd: 'For more information on Goji Loyalty for QFX Cinemas:',
    website: 'www.goji.com.np',
    FacebookPage: ' www.facebook.com/gojiloyalty',
    HelpLine: '9813876466',
    Email: 'gojiloyalty@qfxcinemas.com',
  },
];
