describe('Calculator', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/index.html')
  })

  it('Check that 5 times 5 is 25', async () => {
    const five = await page.$("#five");
    const multiply = await page.$("#multiply");
    const equals = await page.$("#equals");
    await five.click();
    await multiply.click();
    await five.click();
    await equals.click();
    const result = await page.$eval('#screen', e => e.innerText);
    expect(result).toMatch('25');
  })
})
