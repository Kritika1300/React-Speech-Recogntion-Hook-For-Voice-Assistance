import './App.css';
const microPhoneIcon  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD7+/sBAQH+/v79/f38/PyQkJCDg4N5eXlqamrv7+/09PSAgIBUVFT29vbg4OCqqqq/v7+goKDR0dE6Ojra2trn5+e4uLhMTEzq6upFRUUcHByxsbFZWVnIyMiKioonJycUFBQwMDBxcXGYmJghISFISEhiYmI1NTUVFRU/Pz9BGzFbAAARgElEQVR4nNVdiXajOgw1xASyNHuTdMveaTv9//97BGzwIm9YdPo45716iIJ1kcSVbcUQYjqoudFF1iISIttZTUqdDdo2MGSRL2eRrf+VsUamNmhGtYYmq4uEyJp08LqcW7aWG9an6bBt8E8ypTHElqWaLHHIhnRd+2yW1qdpmlLeYF9I2SWGTISkqmxmk6WybBsiqqy16xBZRc3aV+nQv5cwgLIs3W03x9V+ddxsd6nrZnQEqKpZ+Sz33P4AlqLT1enpOkj4Mbg+nVbTNowAgM09iAFY2447EDrAxiUX79dEOBqg13yhdW0CqHXtpyZpj74sSCbLDwaMIxu0tkw+llMvF+0IUCCMvgBO8guHNdAa1Z9L/qzqgBSD8QCtj7L6IX1qXdMA8H6cMvjG/WoLViL7xAZQRLr/X7ro86F9qLQxqJ2oG4dn0pOL0vrzHgAeLw0eYwwKjcuKyNfFAVhnqU0yhOmiBQDDArD8W8AAo1xUY3wcgGUj+wRh2JF+ZtgxyNLRlvHRAM5ndoCGT2ZTihqDjQg6wPQx0EV543Hu6rqTmsHfdPLgix2gJRhffgVA51O0Swzyxuf/AWARaDhZpECLwd5cdNUxBnljRXAtyBg//JvGTKZrDDZp6g4TYD0dlQ3Dv2kcTbzAdO5rQeFpgzLxwBgfEeAyKFWDjbzEA1h9wqcVUUYTk4FmsHCkgwmSi8qMjzPgHZk9MsCUI/JrAe6SxKy9OfTUeE3q6ZtfBZB5+kgFGByDNdDRbwX4bAEYgjRJJngAKQZAJktOmvYengnK5ngA6zlvFIDD9BpjOEn2SgkOwHrsyyeeo1yUpuRocbsQF70fR4ICcFgzPsWwYCly8zKPnylvBGfiARXg/GyOK1dDPZGc5ygAmZooAClZBLqozciMEn8BQHG9YR3vosIn698BUJIdx6Vqiuz49wEkl7hUTfnkggVQZvwOiy+NbAqNmwINJzZSnHG5tModt0a/jR8YSiIblFEdGwF3AqjItgtNUTTR8sUeAyBb5aYIALP76B7PRUvoSwSAqcT4MTFYijCEUama1FhiAeRHnAVL2fcA7X1M+Y4AUOSLaIAkl7V3WtAVr/m/BKi56F02x4vBqpH366JhMVjJ5gipmtjICQ5AKp7u7qIMYReAJtmcoLgoXNfWBeAdYbzhhEZOEAAa6trCY7BG6K29j5E5wrhBD1zX1smCQ44QjfFzBIDShGIkwJQhRKAJ1sgjAKoZJQbAocyHMTTBRPJ/AdAUg5UiebCL2kVylIkHPAv2wfi/ykWJyIfxMVgjxAHIGD/WRYnAhwgxyGzYBaCipruuzRtgb4wfB1Bi/BgXJX6M7+2iLeNHDnpExo8DKDA+hotyPowFKDJ+VAz6MH7ogzYPB2jMKBEsWIr0wfi/CiBjfJPSQTHI+BBh4gETYM34sYYTTuSYFoyjCSZrY/wuM3C5VnLSCSBljB9twT4YH8NFjXVt4QAbPoyLwbamhvFhHMBMWuWOcVGiM37k8gVDGDvoQQNI034YH2FU1xxxLppaGN/fRaUTuTdAd0aJAZCqc97daYI18v4B+sdgJQIyfsSYOP89LspE+mB8DIA0GiDvBWR8ExwP2ZyguKha19YdoDgCjnfR2ksRLKjWtXWhCT4fojF+3GIpZ/zIUV3W2DHWgrQnxgeqDYPUFBnfb2abkOm0uTfibWz4MMZwYiOHAU4mJNwOBqvojzJC9+PXweD18JZqsgrjx0+d5jrA7O1w7368t6rpBmjMYsm+CZKqjoBKvfTA+ArAZdP7YE+GPQDMClGRW6bcRpnxTXAcqZrQyBWA2U18DhWkBws+yIqMiewnPaxySxYcyzew8AXIGN/9/CVviiJVfaQgi7/KLQFcq7J7K0B4ldv6eMpUjZJkLsniM74IcK6LED2t0+nat66tpIk3XcW1KCswvglOUFrXMn6l9Lsu8qaldTpAta7N9ng66Ip8i7Loq9zvIkDyrd+Mg5rWmfIRP4D0L6DRs+AnVRE0JuOvRYDPibbuk/zNDADhJURXivAMabSlwgLBUvoo3pRLASDZJokqe7/BdhcNAnj/VZqu64a2AKtAxVzlfhMAkg0kuwsD6EgRnvWfTpYIiSB7xIvBqnEURhN0A4gMnhEtWCa8Fz0QGEKmyDMy409oqzSzoSxymXgBpOBp/ZvTi6YIQ9jc6QZ4RKomNKQt3TaAyGVOXE9R0jC+x0jyD6DISpQtH+jxhmsbL0RUegWI/DEDNKxy2xdAr4AiaymtOwVY0I20Ldy7K70GRM7ESRNUWuV2ZLGPgCIP4tQC+3Ee0tOmfNCIVnkARB4JoKYCUJxQdKXpB0CRT6nIdeJpQZ+0rv6dbKv0J/AkP7gBKkuI9hzoAVDkQ/7x6RMOTVR/Z5LS5CPRZEsPAgF6l32p31xCGj1Lsms0xq8zmlbpZ0h2KakJFXIHASyfZoArLSTZ5qfccTRx72gwEQHSLSS7QrWglBm2xpBvI5lFGE6W/ZSUbn+PI15u64hBmfGdAIcE0mgk+UnFWg6Anl58lKzCdjJQZL1cVK5rs+ZA5BXo5az0cvbR3sOUX4rbQde9+Fgwg+vaYOceQRrt5O1y9w7t7bjaxkqeG9tBsjdtp15o/JARcZXbnuQtIWMslRLJM4aLllxu7rpprIkHQHkJ0ZHkbSHVXogEkEeiRXsfLz4SWWlodzQ+dLPEoKEqyvj8neteNuCpR/sjqk8PgC6kNyK6KLknS0DWMwXt0N2CkvImZqYpXXQ2XNt4Vib/oJ2ZKj5BASgsn71DGn0TxU/WHQ3XirwRpWt9nm3Ap+KC69psz1+DeTZqIEA77oUw/k0FyOdo5MRo62lBua7NmgMRdQDFFVJ6mf6Bbrl342vezG4yHW4qwPv1r6nDghLArMFlf/4WkNvxDeTaeG3nxQJTtepgW0S1AHeJIjJosynnU7ROZrTNTUy3ZgO5HVvnEnrRh8L+MVg7n9g1KUDZoxdNGHZvMdv+Fdw1Qd/TaQ9q72PTo2JBmj2DshevGFSXEN3jEHjxZaQPq9+6pGpJPSCSAPKkW5Ut/ACKfOEBMMuap6lsjAVRAAq5TZCLtmmK4wFeOnNAyQkMEL41M1Dpmb6nEx9OhgD8u9MAsh412RdoU74wgIbn70pWmiv7RhSA93mpAyhrRjqeNgDbIdseln1TK6QtLkqV03aCSc+QisllqgEkhOdAdsM1jTW/2yLAaqZdl32dquNcC8B6ztu7nmqdaMsX98YnALAcjTyaAGpInxZqJlN1/QneFa0E3FXXRtW6Nsutmf5NlO7qv28AwJJsl3/tAFnjvG82UZW6XsIA64VDLwsa69qM3zRWc2+JBvDemK5fnXxxXs6V4RLreivLNn8fnGq2Mysy43s8f2lq0PU6hwCWx3x5Nrro/X9fb6mhGC+9go8qNib1cdFUYXy/5+8a0jXhk9T6bSyvui340pz8pTI1OS3M93YGuWj594QPUFJ6+Gp49I9AgKyXzfrwJ5GP82G9lbpWEs0RaPZBPbj3iUEYoIdzty8eUfq3bbdSHtPFcV2MxofZYTwq1scFr6I0ADQUxkM1gzDA4NLLlmA+YIDS7Je57oP/dRQmGzbwKwM+81OzLfuqP/dPEVK6NQBseMr2O3oenY4c4x0GOKhGH0Euqta1eX3zBAMcJGh7WZgrOW/+alYi0py3zzdrjV6N2ckNBeDNnNHOg2JQ3r0lwLk3Oos3Wf+EgEq7AApdT15MMVgNIANikOVZDGCQczdJNRCMmyiARC4sUUw5CnPR9vmm3Ub4m63th08mgIN6o7WuLspunmGC4DrHBWhbapuALsoaHzs9gfCy4JDsPvTLtR1tA11UABiSA9UiG8iCjUbvKTFczgaQZMZ9+9gApjPALrZfm5825XFe+QNk1yVkdYZdn133oZuL0vpz/xhsvjlKFFyyZrMjUIdt2VeNHJ9AwzXXPXRSk/rWtemzr8NsZtcoeeFzgx4uSlYvJodgf89z2sFFjXVtTttXj71vm0b343U94bJWgJP1K/+KKQYHUwCgh5oi4wfZvlJ6+iVn/VBjvOJjCBDgHd5+3NwSE00kgx3pBFCcUPSjCRFgqdzVva9Qcpkt63EgNKzZLmeXFo/Z47ceALvXtZk3xiSTs8lFBV+9H7P3/Va8n+Wx2L/PDF/SLrcAAAao6bg1tp0/yfzbfu9lpI+HUXE6nYrR4VE4awNYxyAE0F9N1zfNtq9k54dECxprowVmlpVPXH1isA8XZb3QceIOxpjfmZSjlSgXlRi/A0Dis8lXxyL++mFMOvEgFwl+KxnEbWwpDae2VJV998lkLGo63krmiMFGduF4Z2Ww4fgng2O3VK1VM2vs2NFFuWzzoic0pPf/f0w7jSaASIJvTQDAMq98RXBR5Wasu43ovQH6umjdC5mC1ZnutE5qiCdmC2SA3qmasZfjWSe57jG4JKGTToEAQ1y0kdUmqLrFYPnfaNpl4gFUk9anY2KwkR2SCViQHUYT5XHYEhhgBzUNbyULd1Euu7ip8eSJqwU426hdd8woq4bE+HEW5LILx/SG3cgMH1YMZp5vJQsBWOYP0/w16RiDN+DdjhEu6vtWshCA9Z3OVrygOIQmnpbNfAAWQHkJMToGieBKZLd8cuASJh/L45qX5lNfYRAXg4aqKAQLVo3yxPTt0CKwPjxf1juD0hEx2DNAfvHN+nAVHFEHeJ7lx5RdN2Cd9h+7qDi0Kj9fHN9HVwDgdfR+XMxbHcLWaX3VpCBuNIDNbSxkgFUMVtXFasUZtovKjI/souK8aAG4aOFQGgOgY/cWNICsWluJwcIeHRgxCNe14QPMai9VHzKFNkmMTROpxPh9WpD9kkF52jz4/PosbtDDsP0AwBKhzoMPlq4xXNRd14YDsG4UwA+lC/hmYNHEzwLkW6FJaXhh7BonBn8GILucgLBFWoCXQ4tBpgNj/H4tSFMj4/dFE3BdW38AdcZPOOP7x2AnR4NXubFdVGP8Qcv4fdEEnzqqGZ/0D1Bi/EHL+MgxCDhPe/ToombGR45Bk+xPABQYf6Ayfl800TdARelCr0bgjN9XDP4sQDPj90UTP+ui7fauUu5WgDcDOwZp/XnPAFs+FKdOi/4ymVbW+VYyDBfNOOMrc8NF/zGoMT4OQEgWZvy+Y1B+K1mvABXGTzjj90sT8hJiny5Kaj5Uly8eSL8uatgaox+AXoyPlqr1CtAky3dGEIcXhSqLShM/DFAbAeuMjx6DP+miZKhu6N4wfu8xaHwrGS5AN+Oj04QEMKCurZOL3i8Hz3n3HoPGt5KhAzTNeffsompdW18uepcttJxNYPz+AIqM36sF7YzfVwwOfxIgOOf9YOoaefoWBaAz/TIz/v/DRZ0AzYzfu4tSDIDOXsyM3xtNNAArutDq2qIAgsdJB5iczOJoANW3kiG46HY9GuvH7Qtg/C9AcDyq95LAmjryrGvzt+Be3f1CPKBaIej4s5dunGfXYHSkyADnT4kwm2bEZapra0/MphR1ZiUGoOii03NQzayleDE5T38jwPuWIB7a+xUQf1ADQKeL4gKUZJe+2nuZchkfg9gASVdcBhEsF5UZP4YmjkgxyBtHeG+tYIA143dwbi1VA1aXopCylalIF/V9K5lPJsO2yoijCeFx+oRhQfWtZDG5KHnEdNES+jcCwFRi/MjRBNG2RHBa0C77hAWQH9GjiVOA9j6mPPl3Ld+DvgDWuwcHWNAVr8d/aUF4wIsXg1Xj9wGsNg/u4qKwyFtkqtYApOLpuBE9PSSe2nuY8hBkQUsMwnVt3aYssslXrOGaxteUoLio661koZNO6cxHew+ksyESQLiuLWZWbcVfLxdzfK8IRaEJ1+4t3aaXt8tiFHMUywX65B8mQL5OF3cgT9/W/xqqhgWy2Ma5h/6ymkjWimSurjO96w5qMkE+mtIaGd83UmhosrqIUXbocbmQrp2yTJCaGrRtRIj0JUt9ZC2n/RRBlyXhslaR/wDND0Xd4kxTggAAAABJRU5ErkJggg=="
function App() {
  return (
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div className="microphone-icon-container">
          <img src={microPhoneIcon} className="microphone-icon" />
        </div>
        <div className="microphone-status">
          Click to start Listening
        </div>
        <button className="microphone-stop btn" >
          Stop
        </button>
      </div>

        <div className="microphone-result-container">
          <div className="microphone-result-text">Speech text here</div>
          <button className="microphone-reset btn" >
            Reset
          </button>
        </div>

    </div>
  );
}

export default App;
