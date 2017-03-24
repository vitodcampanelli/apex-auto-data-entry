var Nightmare = require('nightmare');
new Nightmare({show:true})
  // Used to resize headless window
  .viewport(1024, 768)
  .goto('you_apex_url')
  // Wait for item on page before proceeding
  .wait('#P101_LOGIN')
  // Fill in page items on page #101
  .insert('#P101_USERNAME', 'your_username')
  .insert('#P101_PASSWORD', 'your_password')
  // Can use line below to take screenshots.
  //.screenshot('screen.png')
  .click('#P101_LOGIN')
  // Wait for item on page before proceeding
  .wait('#P1_BTN_CREATE')
  // Fill in page items on page #2
  // Text box
  .insert('#P1_APEX_ITEM1', 'field value')
  // Select list
  .select('#P1_APEX_ITEM2', 'select_list_code_value')
  // Radio button click the first radio button
  .click('#P1_APEX_ITEM2_0')
  // Wait time in ms
  .wait(1000)
  .click('#P1_BTN_CREATE')

  .run(function(err, nightmare) {
    if (err) {
      console.log(err);
    }
    console.log('Done.');
  });
