""" //define a class that initialises an order (you the user on a coffe line taking the order)
//define a class coffee(tracks the order>> coffee maker (makes your coffee different from other customers or the same with other customer)
+the system among other customers) 
//define a class order that track the order and calls out the specific customer(waiter)
"""

class Customer:
    _all_customers=[]
    if not instance(name,str) or not(1<= len(name)<=18):""" //handles if name is string and lenght is not empty """
      raise Exception("Name must be a string and not empty")
    def __init__(self,name):
        self._name=name
        self._order=[]
        Customer._all_customers.append(self)

"""     //decorator>>allow you to use code or functions by imortation or reference by making them properties
 """
   @property    
   def name(self):
        return self.name

   @name.setter     
   """ //sets the nameintp a setter for new customers """
    def name(self,new_name):
     if not instance(new_name,str) or not(1<= len(name)<=20):""" //handles if name is string and lenght is not empty """
      raise Exception("Name must be a string and not empty ")\
      self._name=new_name""" //creates a new customer name for different customers """

    def order(self):"""  takes in the customers order """
        return self._orders""" ._order //returns the list of customers orders    """ 
   
   def coffee(self):
    """ //check if a customer  has many coffees 
    check if there are duplicate coffes to be removed (loop throught the list of orders made using a for loop ) """
       return list( set([order._coffee for order in self._orders]) )""" handles duplicates  """

   def create_order(self,coffee,cost):
      order=Order(self,coffee,cost)
      self._orders.append(order)""" //create a new order for the customer and adds it tot he order class list  """
      coffee.orders().append(order)""" //will add the cofee to the coffee class  """
      return order

  """  //coffee class    """

  class Coffee:
    def__init__(self,name):""" //first constructor """
       if not instance(name,str) or not(1<= len(name)<=10):""" //handles if name is string and lenght is not empty """
      raise Exception("Name must be a string and not empty")
      self._name=name
      self._orders=[]

      @property
      def name(self):
        return self._name """ //returns the name of the coffee """
        
      def orders(self):
        return self._orders """ //return the list order """ 


      def customers(self):
        """ //return the list of customers who have ordered the coffee  without repetition"""
        return list( set([order.customer for order in self._orders]) )

  class Order:
    def __init__(self,customer,coffee,cost):
        if not instance(customer,Customer):
            raise Exception("Customer must be an instance of Customer")
        if not instance(coffee,Coffee):
            raise Exception("Coffee must be an instance of Coffee")

         if not instance(cost,float):   
            raise Exception("cost should be a float value ")   

         self._customer=customer 
         self._coffee=coffee
         self._cost=cost  
    

    @property 
    def customer(self):
        return self._customer """ //returns the customer who made the order """

    @property
    def coffee(self):
        return self._coffee
    @property
    def cost(self):
        return self._cost """ //returns the cost of the order """