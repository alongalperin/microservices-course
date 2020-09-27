import { Publisher, Subjects, TicketCreatedEvent } from '@alontickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {

    readonly subject = Subjects.TicketCreated;

}