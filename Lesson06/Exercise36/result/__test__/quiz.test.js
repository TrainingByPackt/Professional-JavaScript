describe('Quiz', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080')
  })

  it('Check question #1', async () => {
    const q1 = await page.$("#q1");
    let rightAnswer = await q1.$x("//button[contains(text(), '10')]");
    await rightAnswer[0].click();
    const result = await page.$eval('#score', e => e.innerText);
    expect(result).toMatch('1');
  })

  it('Check question #2', async () => {
    const q2 = await page.$("#q2");
    let rightAnswer = await q2.$x("//button[contains(text(), '36')]");
    await rightAnswer[0].click();
    const result = await page.$eval('#score', e => e.innerText);
    expect(result).toMatch('2');
  })

  it('Check question #3', async () => {
    const q3 = await page.$("#q3");
    let rightAnswer = await q3.$x("//button[contains(text(), '9')]");
    await rightAnswer[0].click();
    const result = await page.$eval('#score', e => e.innerText);
    expect(result).toMatch('3');
  })

  it('Check question #4', async () => {
    const q4 = await page.$("#q4");
    let rightAnswer = await q4.$x("//button[contains(text(), '99')]");
    await rightAnswer[0].click();
    const result = await page.$eval('#score', e => e.innerText);
    expect(result).toMatch('4');
  })
})
