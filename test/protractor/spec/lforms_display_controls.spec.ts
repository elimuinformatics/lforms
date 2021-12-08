import { TestPage } from "./lforms_testpage.po";
import TestUtil from "./util";
import { browser, logging, element, by, WebElementPromise, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';
let LForms: any = (global as any).LForms;

describe('display controls demo', function() {
  let tp: TestPage = new TestPage(); 

  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
  });

  it('should show values as selected radio buttons/checkboxes', function() {
    tp.LoadForm.openDisplayControlsDemo();

    var item1Answer2 = element(by.id('/q1a/1c2')).element(by.css('input'))
    var item1Answer3 = element(by.id('/q1a/1c3')).element(by.css('input'))
    browser.wait(function () {
      return item1Answer2.isPresent();
    }, tp.WAIT_TIMEOUT_1);

    expect(item1Answer2.isSelected()).not.toBe(true);
    expect(item1Answer3.isSelected()).toBe(true);

    var item3Answer2 = element(by.id('/q1c/1c2')).element(by.css('input'))
    var item3Answer3 = element(by.id('/q1c/1c3')).element(by.css('input'))
    expect(item3Answer2.isSelected()).toBe(true);
    expect(item3Answer3.isSelected()).toBe(true);
  });


  it('displays 4 different types of answer layouts', function () {
    tp.LoadForm.openDisplayControlsDemo();

    var item1answer1 = element(by.id('/q1a/1c1')),
        item1answer3 = element(by.id('/q1a/1c3')),
        item2answer1 = element(by.id('/q1b/1c1')),
        item2Other = element(by.id('/q1b/1_other')),
        item2OtherValue = element(by.id('/q1b/1_otherValue')),

        item3answer1 = element(by.id('/q1c/1c1')),
        item3answer3 = element(by.id('/q1c/1c3')),
        item4answer1 = element(by.id('/q1d/1c1')),
        item4Other = element(by.id('/q1d/1_other')),
        item4OtherValue = element(by.id('/q1d/1_otherValue'));

    browser.wait(function () {
      return item1answer1.isPresent();
    }, tp.WAIT_TIMEOUT_1);

    
    TestUtil.waitForElementDisplayed(item1answer1)
    TestUtil.waitForElementDisplayed(item4answer1)

    // first answer list
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items.length).toBe(10);
      expect(formData.items[1].value.code).toBe("c3");
      expect(formData.items[1].value.text).toBe("Extra long answer text 123456789 Answer Z");
    });

    item1answer1.element(by.css('input')).click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[1].value.code).toBe("c1");
      expect(formData.items[1].value.text).toBe("Extra long answer text 123456789 Answer X");
    });
    item1answer3.element(by.css('input')).click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[1].value.code).toBe("c3");
      expect(formData.items[1].value.text).toBe("Extra long answer text 123456789 Answer Z");
    });

    // second answer list
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[2].value == null).toBeTruthy();
    });

    item2answer1.element(by.css('input')).click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[2].value.code).toBe('c1');
      expect(formData.items[2].value.text).toBe('Long answer text 123 Answer X');
    });

    item2Other.element(by.css('input')).click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[2].value.code == null).toBeTruthy(); // allow undefined (Chrome)
      expect(formData.items[2].value.text == null).toBeTruthy(); // allow undefined (Chrome)
    });

    TestUtil.sendKeys(item2OtherValue, 'other values');
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[2].value.code).toBe(undefined);
      expect(formData.items[2].value.text).toBe('other values');
    });

    item2OtherValue.clear();
    TestUtil.sendKeys(item2OtherValue, 'other values again');
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[2].value.code).toBe(undefined);
      expect(formData.items[2].value.text).toBe('other values again');
    });
    
    // third answer list
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[3].value).toEqual([{"code": "c2", "text": "Answer Y"},
           {"code": "c3", "text": "Answer Z"}]); // default values
    });

    item3answer1.click(); // appends first answer
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[3].value).toEqual([{"code": "c1", "text": "Answer X"},
           {"code": "c2", "text": "Answer Y"}, {"code": "c3", "text": "Answer Z"}]); 
    });

    item3answer3.click(); // deselects third answer
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[3].value).toEqual([{"code": "c1", "text": "Answer X"},
           {"code": "c2", "text": "Answer Y"}]); 
    });
    

    // fourth answer list
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[4].value).toBe(undefined)
    });

    item4answer1.click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[4].value).toEqual([{"code": "c1", "text": "Answer X"}]); 
    });

    item4Other.click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[4].value[0]).toEqual({"code": "c1", "text": "Answer X"})
      expect(formData.items[4].value[1].code == null).toBeTruthy(); // allow undefined
      expect(formData.items[4].value[1].text == null).toBeTruthy(); // allow undefined
    });

    TestUtil.sendKeys(item4OtherValue, 'other values');
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[4].value.length).toBe(2);
      expect(formData.items[4].value[0].code).toBe('c1');
      expect(formData.items[4].value[0].text).toBe('Answer X');
      expect(formData.items[4].value[1].code).toBe(undefined);
      expect(formData.items[4].value[1].text).toBe('other values');
    });

    // change the other value alone will update the data model when the checkbox is checked.
    item4OtherValue.clear();
    TestUtil.sendKeys(item4OtherValue, 'other values again');
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[4].value.length).toBe(2);
      expect(formData.items[4].value[0].code).toBe('c1');
      expect(formData.items[4].value[0].text).toBe('Answer X');
      expect(formData.items[4].value[1].code).toBe(undefined);
      expect(formData.items[4].value[1].text).toBe('other values again');
    });

    // other model values are not changed
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[1].value.code).toBe("c3");
      expect(formData.items[1].value.text).toBe("Extra long answer text 123456789 Answer Z");
    });
    
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[2].value.code).toBe(undefined);
      expect(formData.items[2].value.text).toBe('other values again');
    });

    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[3].value).toEqual([{"code": "c1", "text": "Answer X"},
           {"code": "c2", "text": "Answer Y"}]); 
    });

  });

  it('repeating items/sections works', function () {
    tp.LoadForm.openDisplayControlsDemo();

    var btnAdd1 = element(by.id('add-/g1/1')),
        btnAdd2 = element(by.id('add-/g1/g1g2/1/1')),
        btnAdd3 = element(by.id('add-/g2/1')),

        btnDel1 = element(by.id('del-/g1/2')),
        btnDel2 = element(by.id('del-/g1/g1g2/1/2')),
        btnDel3 = element(by.id('del-/g2/2')),

        q11 = element(by.id('/g1/g1m1/1/1')),
        q21 = element(by.id('/g1/g1g2/g1g2q1/1/1/1')),
        q31 = element(by.id('/g2/g1m1/1/1')),

        q12 = element(by.id('/g1/g1m1/2/1')),
        q22 = element(by.id('/g1/g1g2/g1g2q1/1/2/1')),
        q32 = element(by.id('/g2/g1m1/2/1'));

    browser.wait(function () {
      return btnAdd1.isPresent();
    }, tp.WAIT_TIMEOUT_1);

    expect(q11.isDisplayed()).toBe(true);
    expect(q21.isDisplayed()).toBe(true);
    expect(q31.isDisplayed()).toBe(true);
    TestUtil.waitForElementNotPresent(q12);
    TestUtil.waitForElementNotPresent(q22);
    TestUtil.waitForElementNotPresent(q32);

    TestUtil.clickAddRemoveButton(btnAdd1);
    expect(q12.isDisplayed()).toBe(true);
    TestUtil.clickAddRemoveButton(btnDel1);
    TestUtil.waitForElementNotPresent(q12);

    TestUtil.clickAddRemoveButton(btnAdd2);
    TestUtil.waitForElementPresent(q22);
    expect(q22.isDisplayed()).toBe(true);
    TestUtil.clickAddRemoveButton(btnDel2);
    TestUtil.waitForElementNotPresent(q22);
    TestUtil.waitForElementNotPresent(q22);

    TestUtil.clickAddRemoveButton(btnAdd3);
    expect(q32.isDisplayed()).toBe(true);
    TestUtil.clickAddRemoveButton(btnDel3);
    TestUtil.waitForElementNotPresent(q32);

  });

  it('section matrix works', function () {
    tp.LoadForm.openDisplayControlsDemo();

    var item1answer1 = element(by.id('/g4/g1m1/1/1c1')),
        item1answer2 = element(by.id('/g4/g1m1/1/1c2')),
        item2answer1 = element(by.id('/g4/g1m2/1/1c1')),
        item2answer3 = element(by.id('/g4/g1m2/1/1c3'));

    browser.wait(function () {
      return item1answer1.isPresent();
    }, tp.WAIT_TIMEOUT_1);

    // first row in matrix
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[8].items[0].value).toBe(undefined);
    });

    item1answer1.click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[8].items[0].value[0].code).toBe('c1');
      expect(formData.items[8].items[0].value[0].text).toBe('Answer 1');
    });

    item1answer2.click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[8].items[0].value[0].code).toBe('c1');
      expect(formData.items[8].items[0].value[0].text).toBe('Answer 1');
      expect(formData.items[8].items[0].value[1].code).toBe('c2');
      expect(formData.items[8].items[0].value[1].text).toBe('Answer 2');
    });

    // second row in matrix
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[8].items[1].value).toBe(undefined);
    });
    item2answer1.click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[8].items[1].value[0].code).toBe('c1');
      expect(formData.items[8].items[1].value[0].text).toBe('Answer 1');
    });

    item2answer3.click();
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[8].items[1].value[0].code).toBe('c1');
      expect(formData.items[8].items[1].value[0].text).toBe('Answer 1');
      expect(formData.items[8].items[1].value[1].code).toBe('c3');
      expect(formData.items[8].items[1].value[1].text).toBe('Answer 3');
    });

    // first row is data model does not change
    browser.driver.executeAsyncScript(function () {
      var callback = arguments[arguments.length - 1];
      var fData = LForms.Util.getFormData();
      callback(fData);
    }).then(function (formData:any) {
      expect(formData.items[8].items[0].value[0].code).toBe('c1');
      expect(formData.items[8].items[0].value[0].text).toBe('Answer 1');
      expect(formData.items[8].items[0].value[1].code).toBe('c2');
      expect(formData.items[8].items[0].value[1].text).toBe('Answer 2');
    });

  });

  it('should show disabled inputs', function() {
    tp.LoadForm.openFullFeaturedForm();

    var item1 = element(by.id('/readonlyST/1'));
    var item2 = element(by.id('/readonlyCNE-s/1'));
    var item3 = element(by.id('/readonlyCWE-m/1'));
    var item4c1 = element(by.id('/readonlyCNE-sb/1c1')).element(by.css("input"));
    var item4c2 = element(by.id('/readonlyCNE-sb/1c2')).element(by.css("input"));
    var item4c3 = element(by.id('/readonlyCNE-sb/1c3')).element(by.css("input"));
    var item4c4 = element(by.id('/readonlyCNE-sb/1c4')).element(by.css("input"));
    var item5c1 = element(by.id('/readonlyCWE-mb/1c1')).element(by.css("input"));
    var item5c2 = element(by.id('/readonlyCWE-mb/1c2')).element(by.css("input"));
    var item5c3 = element(by.id('/readonlyCWE-mb/1c3')).element(by.css("input"));
    var item5c4 = element(by.id('/readonlyCWE-mb/1c4')).element(by.css("input"));
    browser.wait(function () {
      return item1.isPresent();
    }, tp.WAIT_TIMEOUT_1);
    expect(item1.isEnabled()).toBe(false);
    expect(item2.isEnabled()).toBe(false);
    expect(item3.isEnabled()).toBe(false);
    expect(item4c1.isEnabled()).toBe(false);
    expect(item4c2.isEnabled()).toBe(false);
    expect(item4c3.isEnabled()).toBe(false);
    expect(item4c4.isEnabled()).toBe(false);
    expect(item5c1.isEnabled()).toBe(false);
    expect(item5c2.isEnabled()).toBe(false);
    expect(item5c3.isEnabled()).toBe(false);
    expect(item5c4.isEnabled()).toBe(false);

  });

  it('should show changed font color', function() {
    tp.LoadForm.openFullFeaturedForm();

    var label1 = element(by.id('label-/q_lg/1'));

    browser.wait(function () {
      return label1.isPresent();
    }, tp.WAIT_TIMEOUT_1);
    expect(label1.getCssValue('color')).toBe('rgba(255, 0, 0, 1)'); // red

  });
});
