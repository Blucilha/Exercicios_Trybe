const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
};

//"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701"
  const customerInfo = (order) => {
    const confirma = `Olá ${Object.values(order.order.delivery)[0]}, entrega para: ${Object.values(order)[0]}, Telefone: ${Object.values(order)[1]}, R. ${Object.values(order.address)[0]}, Nº: ${Object.values(order.address)[1]}, AP: ${Object.values(order.address)[2]}`;
    return confirma
  }
  



