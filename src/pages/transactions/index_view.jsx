var React = require('react');
module.exports = function() {
    return <div className="pd4670">
        <span>
            <style dangerouslySetInnerHTML={{__html: "\n\
                * {\n\
                    box-sizing: border-box;\n\
                }\n\
                \n\
                body {\n\
                    margin: 0;\n\
                }\n\
                \n\
                button:hover {\n\
                    cursor: pointer;\n\
                }\n\
                \n\
                a {\n\
                    text-decoration: none;\n\
                    color: inherit;\n\
                }\n\
                \n\
                .pd4670-text-2 {\n\
                  flex-shrink: 0;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #000000;\n\
                  font-size: 14px;\n\
                  font-weight: normal;\n\
                  font-style: normal;\n\
                  text-decoration: none;\n\
                  text-align: left;\n\
                  word-wrap: break-word;\n\
                  min-height: 20px;\n\
                  width: 95px;\n\
                }\n\
                \n\
                .pd4670-text-9 {\n\
                  flex-shrink: 0;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #000000;\n\
                  font-size: 14px;\n\
                  font-weight: normal;\n\
                  font-style: normal;\n\
                  text-decoration: none;\n\
                  text-align: left;\n\
                  word-wrap: break-word;\n\
                  min-height: 20px;\n\
                  width: 153px;\n\
                }\n\
                \n\
                .pd4670-0-0-0-1 {\n\
                  margin-left: 21px;\n\
                }\n\
                \n\
                .pd4670-0-0-0 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  padding-left: 32px;\n\
                  padding-right: 182px;\n\
                }\n\
                \n\
                .pd4670-text-3 {\n\
                  width: 232px;\n\
                  flex-shrink: 0;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #000000;\n\
                  font-size: 14px;\n\
                  font-weight: normal;\n\
                  font-style: normal;\n\
                  text-decoration: none;\n\
                  text-align: left;\n\
                  word-wrap: break-word;\n\
                  min-height: 20px;\n\
                }\n\
                \n\
                .pd4670-0-0-1-0-0-0-0-0 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  padding-left: 11px;\n\
                  padding-right: 8px;\n\
                }\n\
                \n\
                .pd4670-text-7 {\n\
                  width: 232px;\n\
                  flex-shrink: 0;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: rgb(121, 121, 121);\n\
                  font-size: 14px;\n\
                  font-weight: normal;\n\
                  font-style: normal;\n\
                  text-decoration: none;\n\
                  text-align: left;\n\
                  word-wrap: break-word;\n\
                  min-height: 20px;\n\
                }\n\
                \n\
                .pd4670-0-0-1-0-0-0-0-1 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  margin-top: 20px;\n\
                  padding-left: 11px;\n\
                  padding-right: 8px;\n\
                }\n\
                \n\
                .pd4670-layout-7 {\n\
                  display: flex;\n\
                  flex-direction: column;\n\
                  flex-shrink: 0;\n\
                  padding-top: 10px;\n\
                  padding-bottom: 13px;\n\
                  background: rgb(255, 255, 255);\n\
                  width: 100%;\n\
                  margin-top: 10px;\n\
                  border: 1px solid #979797;\n\
                }\n\
                \n\
                .pd4670-0-0-1-0-0-0 {\n\
                  width: 100%;\n\
                }\n\
                \n\
                .pd4670-0-0-1-0 {\n\
                  margin-top: -10px;\n\
                }\n\
                \n\
                .pd4670-0-0-1 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  min-width: 253px;\n\
                  margin-top: 19px;\n\
                  justify-content: center;\n\
                }\n\
                \n\
                .pd4670-0-0 {\n\
                  display: flex;\n\
                  flex-direction: column;\n\
                  flex-shrink: 0;\n\
                  min-width: 483px;\n\
                  padding-top: 15px;\n\
                  padding-bottom: 0px;\n\
                }\n\
                \n\
                .pd4670-artboard-5 {\n\
                  display: flex;\n\
                  flex-direction: column;\n\
                  min-width: 483px;\n\
                  padding-top: 0px;\n\
                  padding-bottom: 231px;\n\
                  background: #FFFFFF;\n\
                  min-height: 100vh;\n\
                }\n\
                \n\
                \n\
                "}}/>
        </span>
        <div className="pd4670-artboard-5">
            <div className="pd4670-0-0">
                <div className="pd4670-0-0-0">
                    <a className="pd4670-0-0-0-0" href="/transactions">
                        <div className="pd4670-text-2">Transactions</div>
                    </a>
                    <a className="pd4670-0-0-0-1" href="/company">
                        <div className="pd4670-text-9">My company</div>
                    </a>
                </div>
                <div className="pd4670-0-0-1">
                    <div className="pd4670-0-0-1-0">
                        { this.state.transactions.map(function (transaction) {
                            return <div className="pd4670-0-0-1-0-0-0">
                                <div className="pd4670-layout-7">
                                    <div className="pd4670-0-0-1-0-0-0-0-0">
                                        <div className="pd4670-text-3">{ transaction.id }</div>
                                    </div>
                                    <div className="pd4670-0-0-1-0-0-0-0-1">
                                        <div className="pd4670-text-7">
                                            { transaction.description }
                                        </div>
                                    </div>
                                </div>
                            </div>;
                        }) }
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
