import { Request, Response } from 'express';
import { flights, sea, visa } from '../services/visa';

// nav links
const navLinks = [
  { url: '/', title: 'الصفحة الرئسية' },
  { url: '/distinations.html', title: 'الوجهات' },
  { url: '/visa.html', title: 'التأشيرات' },
  { url: '/flight-tickts.html', title: 'تذاكر الطيران' },
  { url: '/sea', title: 'تذاكر البحر' },
  { url: '/contact.html', title: 'اتصل بنا' },
  { url: '/about.html', title: 'عن الوكالة' },
];
// website name
const websiteName = 'ابو جعفر للسفر والسياحة';
// index page handler
export function indexPageHandler(req: Request, res: Response) {
  // services blocks
  const services = [
    { url: '/visa', title: 'التأشيرات', dists: visa },
    { url: '/flights', title: 'تذاكر الطيران', dists: flights },
    { url: '/sea', title: 'تذاكر البحر', dists: sea },
  ];
  // index page data
  const indexPageData = {
    title: `الصفحة الرئسية | ${websiteName}`,
    websiteName,
    services,
    navLinks,
  };
  res.render('index', indexPageData);
}
// booking sea tickts handler
export function bookingSeaTicksHandler(req: Request, res: Response) {
  res.render('sea', {
    title: `تذاكر البحر | ${websiteName}`,
    websiteName,
    service: { url: '/sea', title: 'تذاكر البحر', dists: sea },
    navLinks,
  });
}
// get service item data
export function getSeaServiceHandler(req: Request, res: Response) {
  // service id
  const { categId, serviceId } = req.params as { serviceId: any; categId: any };
  // query service
  const service = sea
    .filter((dist) => dist._id === categId)[0]
    .visaList.filter((item) => item._id === serviceId)[0];
  res.render('indivService', {
    navLinks,
    service: { ...service, url: '/sea', title: 'تذاكر البحر' },
    websiteName,
    title: `${service.name} | ${websiteName}`,
  });
}
// booking sea tickts handler
export function bookingVisaTicksHandler(req: Request, res: Response) {
  res.render('visa', {
    title: `التأشيرات | ${websiteName}`,
    websiteName,
    service: { url: '/visa', title: 'التأشيرات', dists: visa },
    navLinks,
  });
}
// get service item data
export function getVisaServiceHandler(req: Request, res: Response) {
  // service id
  const { categId, serviceId } = req.params as { serviceId: any; categId: any };
  // query service
  const service = visa
    .filter((dist) => dist._id === categId)[0]
    .visaList.filter((item) => item._id === serviceId)[0];
  res.render('indivService', {
    navLinks,
    websiteName,
    service: { ...service, url: '/visa', title: 'التأشيرات' },
    title: `${service.name} | ${websiteName}`,
  });
}
// booking sea tickts handler
export function bookingFlightsTicksHandler(req: Request, res: Response) {
  res.render('flights', {
    title: `تذاكر الطيران | ${websiteName}`,
    websiteName,
    service: { url: '/flights', title: 'تذاكر الطيران', dists: flights },
    navLinks,
  });
}
// get service item data
export function getFlightServiceHandler(req: Request, res: Response) {
  // service id
  const { categId, serviceId } = req.params as { serviceId: any; categId: any };
  // query service
  const service = flights
    .filter((dist) => dist._id === categId)[0]
    .visaList.filter((item) => item._id === serviceId)[0];
  res.render('indivService', {
    navLinks,
    service: { ...service, url: '/flights', title: 'تذاكر الطيران' },
    websiteName,
    title: `${service.name} | ${websiteName}`,
  });
}
