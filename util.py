def a(a):
    sum = 0
    res = 0

    for i in a:
        sum += i

    sum /= len(a)

    for i in a:
        res += (i - sum) ** 2

    res /= len(a)*(len(a)-1)

    res = res ** 0.5

    return res * 2.447


print(a([0.022,
         0.023,
         0.027,
         0.024,
         0.022,
         0.036,
         0.023]))

print([154.52,
       158.23,
       121.72,
       100.8,
       84.23,
       73.07,
       64.68,
       56.81,
       52.1,
       42.05,].reverse())
