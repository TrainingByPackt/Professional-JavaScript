describe('Calculator', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080');
  })

  it('Check that 777 times 777 is 603729', async () => {
    const seven = await page.$("#seven");
    const multiply = await page.$("#multiply");
    const equals = await page.$("#equals");
    const clear = await page.$("#clear");
    await seven.click();
    await seven.click();
    await seven.click();
    await multiply.click();
    await seven.click();
    await seven.click();
    await seven.click();
    await equals.click();
    const result = await page.$eval('#screen', e => e.innerText);
    expect(result).toMatch('603729');
    await clear.click();
  })

  it('Check that 3.14 divided by 2 is 1.57', async () => {
    const one = await page.$("#one");
    const two = await page.$("#two");
    const three = await page.$("#three");
    const four = await page.$("#four");
    const divide = await page.$("#divide");
    const decimal = await page.$("#decimal");
    const equals = await page.$("#equals");
    await three.click();
    await decimal.click();
    await one.click();
    await four.click();
    await divide.click();
    await two.click();
    await equals.click();
    const result = await page.$eval('#screen', e => e.innerText);
    expect(result).toMatch('1.57');
  })

})
