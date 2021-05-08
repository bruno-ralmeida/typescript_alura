import { NegotiationController } from './controllers/NegotiationController';
const controller = new NegotiationController();
$('.form').on('submit', controller.add.bind(controller));
