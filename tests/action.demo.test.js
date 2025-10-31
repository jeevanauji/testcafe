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
});