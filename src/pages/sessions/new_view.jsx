var React = require('react');
module.exports = function() {
    return <div className="pd">
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
                .pd-text-3 {\n\
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
                .pd-text-5 {\n\
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
                .pd-0-0-0-1 {\n\
                  margin-left: 21px;\n\
                }\n\
                \n\
                .pd-0-0-0-2 {\n\
                  height: 0px;\n\
                  width: 100%;\n\
                }\n\
                \n\
                .pd-text-8 {\n\
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
                .pd-0-0-0 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  min-width: 384px;\n\
                  padding-left: 20px;\n\
                  padding-right: 0px;\n\
                }\n\
                \n\
                .pd-textinput-5 {\n\
                  width: 214px;\n\
                  height: 23px;\n\
                  flex-shrink: 0;\n\
                  border-radius: 4px;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #000;\n\
                  font-size: 14px;\n\
                  padding: 6px 12px;\n\
                  border: 1px solid #cccccc;\n\
                }\n\
                \n\
                .pd-0-0-1-0-0 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  padding-left: 22px;\n\
                  padding-right: 15px;\n\
                }\n\
                \n\
                .pd-textinput-53 {\n\
                  width: 214px;\n\
                  height: 23px;\n\
                  flex-shrink: 0;\n\
                  border-radius: 4px;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #000;\n\
                  font-size: 14px;\n\
                  padding: 6px 12px;\n\
                  border: 1px solid #cccccc;\n\
                }\n\
                \n\
                .pd-0-0-1-0-1 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  margin-top: 14px;\n\
                  padding-left: 22px;\n\
                  padding-right: 15px;\n\
                }\n\
                \n\
                .pd-button-2 {\n\
                  width: 110px;\n\
                  height: 26px;\n\
                  flex-shrink: 0;\n\
                  border-radius: 4px;\n\
                  background: rgb(188, 194, 197);\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #fff;\n\
                  font-size: 16px;\n\
                  font-weight: normal;\n\
                  font-style: normal;\n\
                  text-decoration: none;\n\
                  text-align: center;\n\
                  word-wrap: break-word;\n\
                  border: none;\n\
                }\n\
                \n\
                .pd-0-0-1-0-2 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  margin-top: 21px;\n\
                  padding-left: 74px;\n\
                  padding-right: 67px;\n\
                }\n\
                \n\
                .pd-layout-4 {\n\
                  display: flex;\n\
                  flex-direction: column;\n\
                  flex-shrink: 0;\n\
                  padding-top: 23px;\n\
                  padding-bottom: 12px;\n\
                  background: rgb(255, 255, 255);\n\
                  border: 1px solid #979797;\n\
                }\n\
                \n\
                .pd-0-0-1 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  min-width: 253px;\n\
                  margin-top: 16px;\n\
                  justify-content: center;\n\
                }\n\
                \n\
                .pd-0-0 {\n\
                  display: flex;\n\
                  flex-direction: column;\n\
                  flex-shrink: 0;\n\
                  min-width: 384px;\n\
                  padding-top: 15px;\n\
                  padding-bottom: 0px;\n\
                }\n\
                \n\
                .pd-artboard-8 {\n\
                  display: flex;\n\
                  flex-direction: column;\n\
                  min-width: 384px;\n\
                  padding-top: 0px;\n\
                  padding-bottom: 175px;\n\
                  background: #FFFFFF;\n\
                  min-height: 100vh;\n\
                }\n\
                \n\
                \n\
                "}}/>
        </span>
        <div className="pd-artboard-8">
            <div className="pd-0-0">
                <div className="pd-0-0-0">
                    <a className="pd-0-0-0-0" href="/transactions">
                        <div className="pd-text-3">Transactions</div>
                    </a>
                    <a className="pd-0-0-0-1" href="/company">
                        <div className="pd-text-5">My company</div>
                    </a>
                    <div className="pd-0-0-0-2"></div>
                    <a className="pd-0-0-0-3" href="/login">
                        <div className="pd-text-8">Logout</div>
                    </a>
                </div>
                <div className="pd-0-0-1">
                    <div className="pd-layout-4">
                        <div className="pd-0-0-1-0-0">
                            <input className="pd-textinput-5" placeholder="Email" type="text"></input>
                        </div>
                        <div className="pd-0-0-1-0-1">
                            <input className="pd-textinput-53" placeholder="Password" type="text"></input>
                        </div>
                        <div className="pd-0-0-1-0-2">
                            <button className="pd-button-2" type="submit">
                                <span className="pd-0-0-1-0-2-0-0">Login</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};