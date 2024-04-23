import express from 'express';
import {
  bookingFlightsTicksHandler,
  bookingSeaTicksHandler,
  bookingVisaTicksHandler,
  getFlightServiceHandler,
  getSeaServiceHandler,
  getVisaServiceHandler,
  indexPageHandler,
} from '../controllers';
var router = express.Router();

/* GET home page. */
router.get('/', indexPageHandler);
/* GET home page. */
router.get('/sea', bookingSeaTicksHandler);
/* GET home page. */
router.get('/sea/:categId/:serviceId', getSeaServiceHandler);
/* GET home page. */
router.get('/visa', bookingVisaTicksHandler);
/* GET home page. */
router.get('/visa/:categId/:serviceId', getVisaServiceHandler);
/* GET home page. */
router.get('/flights', bookingFlightsTicksHandler);
/* GET home page. */
router.get('/flights/:categId/:serviceId', getFlightServiceHandler);

export default router;
