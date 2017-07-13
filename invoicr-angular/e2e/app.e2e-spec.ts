import { InvoicrAngularPage } from './app.po';

describe('invoicr-angular App', function() {
  let page: InvoicrAngularPage;

  beforeEach(() => {
    page = new InvoicrAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
