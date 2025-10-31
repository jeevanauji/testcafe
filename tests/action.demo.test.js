fixture("Action Demo Tests")
    .page("https://trytestingthis.netlify.app/");

test("TestCafe Action", async t => {
    await t
        .click("body > div.navbar > a:nth-child(1)")
        .wait(2000)
        .click("body > div.navbar > a:nth-child(2)");

});