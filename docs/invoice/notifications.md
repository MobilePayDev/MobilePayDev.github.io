---
sidebar_position: 6
---

# Notifications

## Push notifications

|Description|Action|EN| DK | FI  |Device|
|----------|---------|---|-------------------|------------------------|----------------------|
|Push notification when User gets Invoice.   |_Open context screen_        |[Invoice Issuer name] wants to send you a bill  |[Invoice Issuer name] har en regning til dig  |  [Invoice Issuer name] haluaa lähettää sinulle laskun|iOS & Android|
|In app push when User gets Invoice    |_Open context screen_              |[Invoice Issuer name] wants to send you a bill  | [Invoice Issuer name] har en regning til dig|[Invoice Issuer name] haluaa lähettää sinulle laskun|(just for iOS)|
| Push notification when User opens Invoice via web  | Open context screen       |Pay a bill  | Betal en regning|Maksa lasku|iOS & Android|
|In app push when User opens Invoice via web   |Open context screen  | Pay a bill  | Betal en regning|Maksa lasku|(just for iOS)|

## SMS

### SMS to user before due date

SMS is sent for ignored (not accepted or rejected) invoices.

* SMS is sent to the user one day prior the due date at 13:30
* If the due date equals the current date and the invoice is received before 13:30 then the SMS is sent to the user on due date
* If the due date equals the current date and the invoice is received after 13:30 then the the SMS is sent to the user one day after the due date

### SMS to user when payment fails

* If the future payment can't be processed SMS is sent at 07:00 UTC (09:00 DK time or 10:00 FI time), but only if user hasn't completed payment manually until this time.

[![Notification](/img/invoice-smsfail.PNG)](/img/invoice-smsfail.PNG)
