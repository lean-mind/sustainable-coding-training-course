# Repository issues list

The aim of the code you can find in the following commits is to take a look at it and debate about possible improvements.
The idea is working on it while mob programming or pair programming. 


* Responsabilities and design principles. Exercise to think and refactor:
    * Repository: https://github.com/lean-mind/savvily-orders-manager/commits/main
    * Commit: 5a0a372d66991ecc355008cd464b1c254e162f7e
    * Starting point: OrderResource.java, linea 38, process order - controller.
    * Estimated duration: 2+ hours

* Refactor:
  * Repository: https://github.com/lean-mind/savvily-orders-manager/commits/main
  * Commit: 36cd23d216f455ee6aefee1c284616f8d52ef31c
  * Starting point: MailService.java, line 20, send an order - service.
  * Estimated duration: 2+ hours

* Responsabilities and design principles. Refactor:
  * Repository: https://github.com/lean-mind/savvily-orders-manager/commits/main
  * Commit: 0a178e7fe849b2513195b36ba68308dff8e391e7
  * Starting point: OrderHandlerService.java, line 35, process order - service
  * Questions to reflect about:
    * Is OrderTransformer really needed? Is it implemented correctly?
    * OrderRestService? What issues can you see?
    * What do you think about the dependencies? Are they managed properly? Are they appropriate?
  * Estimated duration: 2+ hours

* Responsabilities and design principles. Refactor and use of decorator pattern:
  * Repository: https://github.com/lean-mind/savvily-orders-manager/commits/main
  * Commit: 03ecd93346664d2e337920374419080c002efda3
  * Starting point: OrderService.java, line 34, process order - service
  * Questions to reflect about:
      * What do you think about the dependencies? Are they managed properly? Are they appropriate?
      * Do you think the logger dependency should be injected in the constructor?
      * What do you think we could do to remove that dependency and keep using the logger? 
  * Estimated duration: 2+ hours

* Refactor
  * Repository: https://github.com/lean-mind/savvily-orders-manager/commits/main
  * Commit: 695535134cc969dfbf711b6f9a5d40d1b4f8d433
  * Starting point: OrderService.java, line 35, process order - service
  * Questions to reflect about:
    * What do you think about the way the order preparation is being managed? Which service should manage it?
    * Which are the responsibilities of OrderJsonHandler? Are they appropriate?
  * Estimated duration: 2+ hours