const { Selector } = require("testcafe");

fixture("Action Demo Tests")
    .page("https://trytestingthis.netlify.app/");

test("TestCafe Action", async t => {
    await t

        //click
        .click("body > div.navbar > a:nth-child(1)")
        .wait(2000)
        .click("body > div.navbar > a:nth-child(2)")
        .wait(2000)
        // typeText
        .typeText("#fname", "Jeevan")
        .wait(2000)
        .typeText("#lname", "Auji")
        .wait(2000)
        // doubleClick
        .doubleClick("body > div.row > div.side.ex1 > button")
        .wait(2000)
        // rightClick
        .rightClick("#fname")
        .expect(Selector('#cell-popup-menu').exists).notOk()
        .wait(2000)

        // hover
        .hover(".tooltip")
        .wait(2000)

        // drag and drop
        .dragToElement("#drag1", "#div1")
        .wait(2000)

        // scroll to element
        .scrollIntoView('body > div.footer > h4:nth-child(4) > a')
        .wait(2000)

        //alert
        .setNativeDialogHandler(() => true)
        .click('body > div.row > div.side.ex1 > div.pop-up-alert > button')
        .wait(2000)
        
        //screenshot
        .takeScreenshot('screenshot.png')
        .wait(2000);
});