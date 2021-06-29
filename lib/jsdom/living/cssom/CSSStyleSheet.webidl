// https://drafts.csswg.org/cssom/#cssstylesheet
[Exposed=Window]
interface CSSStyleSheet : StyleSheet {
  constructor(optional CSSStyleSheetInit options= {});

  // readonly attribute CSSRule? ownerRule;
  [SameObject] readonly attribute CSSRuleList cssRules;
  unsigned long insertRule(CSSOMString rule, optional unsigned long index = 0);
  undefined deleteRule(unsigned long index);

  //Promise<CSSStyleSheet> replace(USVString text);
  //undefined replaceSync(USVString text);
};

dictionary CSSStyleSheetInit {
  DOMString baseURL = null;
  (MediaList or DOMString) media = "";
  boolean disabled = false;
};

partial interface CSSStyleSheet {
  [SameObject] readonly attribute CSSRuleList rules;
  long addRule(optional DOMString selector = "undefined", optional DOMString style = "undefined", optional unsigned long index);
  undefined removeRule(optional unsigned long index = 0);
};
