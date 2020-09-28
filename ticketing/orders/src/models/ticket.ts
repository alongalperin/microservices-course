import mongoose from 'mongoose';
import { Order, OrderStatus } from './order';
import { TicketDoc } from './ticketDoc';

interface TicketAttrs {
    title: string;
    price: number;
}

interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
}, {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
        }
    }
});

ticketSchema.statics.build = (attrs: TicketAttrs) => {
    return new Ticket(attrs);
};

// Run query to look at all orders. Find an order where the ticket
// is the ticket we just found *and* the orders status is *not* cacncelled.
// If we find an order from that means the ticket *is* reserved.
ticketSchema.methods.isReserved = async function () {
    // this === the ticket document that we called 'isReserved' on
    const existingOrder = await Order.findOne({
        ticket: this,
        status: { $in: [ OrderStatus.Created, OrderStatus.AwaitingPayment, OrderStatus.Complete ] }
    });

    return !!existingOrder;
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };