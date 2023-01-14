import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller()
export class BankController {
  @Get('/text')
  getInfo() {
    return JSON.stringify(
      [
        {
          _id: '63c2baf105f9b5b6c06a56bc',
          index: 0,
          guid: 'c41c04fc-16ec-48d2-8441-d16310fdf888',
          isActive: true,
          balance: '$1,387.69',
          picture: 'http://placehold.it/32x32',
          age: 38,
          eyeColor: 'green',
          name: 'Hillary Murray',
          gender: 'female',
          company: 'TALENDULA',
          email: 'hillarymurray@talendula.com',
          phone: '+1 (995) 465-3719',
          address: '680 Jamaica Avenue, Wolcott, Maryland, 3141',
          about:
            'Reprehenderit ullamco aliquip nisi laborum consequat do culpa dolor. Ipsum exercitation dolor anim fugiat fugiat anim consectetur mollit excepteur dolor esse reprehenderit aute labore. Adipisicing eu dolor aliqua Lorem reprehenderit laborum esse do. Voluptate officia incididunt laboris cupidatat sit. Ipsum proident anim culpa deserunt reprehenderit officia labore ipsum officia ad aute. Aliqua sit laboris qui et enim amet culpa est nostrud minim proident cillum.\r\n',
          registered: '2018-03-16T07:28:38 -02:00',
          latitude: 69.271493,
          longitude: -75.257084,
        },
        {
          _id: '63c2baf13643cff539cf7453',
          index: 1,
          guid: 'e430f615-e583-45a7-b19b-7e88bcd574da',
          isActive: true,
          balance: '$1,697.42',
          picture: 'http://placehold.it/32x32',
          age: 30,
          eyeColor: 'green',
          name: 'Janis Castaneda',
          gender: 'female',
          company: 'FIREWAX',
          email: 'janiscastaneda@firewax.com',
          phone: '+1 (928) 560-2766',
          address: '952 Post Court, Cutter, Alaska, 6928',
          about:
            'Duis est tempor ex cupidatat do id anim nulla commodo ex culpa do non. Non esse duis eiusmod quis est et cillum mollit incididunt. Irure enim eiusmod in ad esse non in labore commodo proident. Id cupidatat commodo nisi ullamco et ex minim Lorem amet elit.\r\n',
          registered: '2014-04-02T06:10:36 -03:00',
          latitude: -7.121069,
          longitude: -67.323699,
        },
        {
          _id: '63c2baf122088aa4ec3a7f68',
          index: 2,
          guid: 'ec603c76-97e1-4d3f-a1fb-c6d44654bd7d',
          isActive: false,
          balance: '$1,498.93',
          picture: 'http://placehold.it/32x32',
          age: 30,
          eyeColor: 'blue',
          name: 'Doreen Griffin',
          gender: 'female',
          company: 'RENOVIZE',
          email: 'doreengriffin@renovize.com',
          phone: '+1 (958) 403-3344',
          address: '411 Macdougal Street, Trona, Colorado, 3934',
          about:
            'Pariatur fugiat consectetur elit anim ex laboris laboris reprehenderit adipisicing. Consectetur et duis Lorem eiusmod eu velit dolor do. Do sint ut quis culpa culpa et cillum.\r\n',
          registered: '2016-04-30T06:40:19 -03:00',
          latitude: -28.160577,
          longitude: 89.172191,
        },
        ,
      ],
      null,
      4,
    );
  }
}
