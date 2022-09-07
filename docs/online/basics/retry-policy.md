---
sidebar_position: 4
---

# Retry policy

Even though we have above 99% uptime and handle millions of transactions each week, external factors, such as network related issues, can contribute to momentary disturbances in our response times.
To reduce the risk of such issues having negative impact on the customer experience, you should implement a retry mechanism.

Our suggestions:

* If you do not get a response within 2 seconds, try again.
* If you get an unexpected error (HTTP > 299) wait 1 second, then try again.
* Suggested retry count is 2 (three attempts in total). You should under no circumstance retry more than 6 times. As this could worsen any ongoing situation in our setup.

You’re welcome to make use of more advanced retry strategies (exponential back-off, circuit breakers etc.), as long as you take the suggestions above into consideration.
