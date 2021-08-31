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
        marguerita: {
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
  
  const customerInfo = (order) => {
    //Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.street}, N: ${order.number}, AP: ${order.apartment}`
  
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    //Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
    order.name = 'Luiz Silva'
    order.payment.total = 50
    const pizzaTypes = Object.keys(order.order.pizza) 

    return `Olá ${order.name}, o total do seu pedido de ${pizzaTypes[0]}, ${pizzaTypes[1]} e ${order.order.drinks.coke.type} é ${order.payment.total}`

  
  }
  
  console.log(orderModifier(order));