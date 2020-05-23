import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import { getFlatTranslations } from "../../redux/selectors";

const mapStateToProps = state => ({
  locale: "en",
  messages: getFlatTranslations(state)
});

export default connect(mapStateToProps)(IntlProvider);
