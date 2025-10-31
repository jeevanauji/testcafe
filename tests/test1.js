fixture('Getting Started')
.page('https://www.youtube.com/');

test('My first test', async t => {
 await t.typeText('.ytSearchboxComponentInput', 'TestCafe');
 await t.click('.ytSearchboxComponentSearchButton');
 await t.wait(10000);
});
