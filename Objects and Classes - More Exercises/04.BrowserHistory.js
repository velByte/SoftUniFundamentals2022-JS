function solve(param1, param2) {

    class Browser {

        constructor(browserObj) {
            this.browserName = browserObj["Browser Name"];
            this.openTabs = browserObj["Open Tabs"];
            this.recantlyClosed = browserObj["Recently Closed"];
            this.browserLogs = browserObj["Browser Logs"];
        }

        getName() {
            return this.browserName;
        }
        getOpenTabs() {
            return this.openTabs
        }
        getRecantlyClosed() {
            return this.recantlyClosed;
        }
        getBrowserLog() {
            return this.browserLogs;
        }

        openTab(tabName) {
            this.openTabs.push(tabName);
            this.add2Log("open", tabName)
        }

        add2Log(action, item) {
            switch (action.toLowerCase()) {
                case "open":
                    this.browserLogs.push("Open " + item);
                    break;
                case "close":
                    this.browserLogs.push("Close " + item);
                    break;
            }
        }

        add2RecentlyClosed(item) {
            this.recantlyClosed.push(item);
        }

        closeTab(tabName) {
            if (this.openTabs.includes(tabName)) {
                let tabIndex = this.openTabs.indexOf(tabName);
                this.openTabs.splice(tabIndex, 1);
                this.add2Log("close", tabName);
                this.add2RecentlyClosed(tabName);
            }
        }

        clearHistoryAndCache() {
            this.openTabs = [];
            this.recantlyClosed = [];
            this.browserLogs = [];
        }

        toSting() {
        }
    }

    let browser = new Browser(param1);

    param2.forEach(item => {
        let [cmd, tabName] = item.split(" ");
        switch (cmd.toLowerCase()) {
            case "open":
                browser.openTab(tabName);
                break;
            case "close":
                browser.closeTab(tabName);
                break;
            case "clear":
                browser.clearHistoryAndCache();
                break;
            default:
                break;
        }
    })
    console.log(browser.getName());
    console.log("Open Tabs:", browser.getOpenTabs().join(", "));
    console.log("Recently Closed:", browser.getRecantlyClosed().join(", "));
    console.log("Browser Logs:", browser.getBrowserLog().join(", "));

}

let param1 = {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
}
let param2 = ["Close Facebook", "Open StackOverFlow", "Open Google"];

solve(param1, param2);
