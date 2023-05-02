export type navigationTypes = {
  navigate(
    arg0: string,
    arg1?: {
      urlToImage?: string;
      name: string;
      eventRating: string;
      date?: string;
      trailer: string;
      genre: string;
      runtime: number;
      director: string;
      cast: string;
      synopsis: string;
      theatreID: number;
      eventID?: number;
      showDate?: string;
      city?: string;
      companyid?: number;
      newMovieInfo?: any;
      id?: number;
    },
  ): unknown;
  getParent(arg0: string): any;
  toggleDrawer: () => void;
  goBack: () => void;
  NowShowing: undefined;
  NextChange: undefined;
  ComingSoon: undefined;
  GojiLoyalty: undefined;
  Help: undefined;
  Locations: undefined;
  Login: undefined;
  MyDashboard: undefined;
  MyProfile: undefined;
  Register: undefined;
  Support: undefined;
  TermsConditions: undefined;
  DescriptionWrapper: undefined;
  Home: undefined;
  MyProfileWrapper: undefined;
  ShowSelectionWrapper: undefined;
  ShowSelection: undefined;
};
