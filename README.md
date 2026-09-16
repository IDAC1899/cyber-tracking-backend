
# Cyber-Tracking-Backend
 
**Cyber Tracking** is a full-stack MERN application built for security teams to log, monitor, and manage cybersecurity incidents from detection through resolution. Analysts can report incidents, link related threat indicators (IPs, domains, malware, phishing artifacts) to each case, and open formal investigations assigned to specific team members — giving the whole workflow a clear paper trail from "something happened" to "here's what we found and fixed."
 
The app uses token-based authentication with role-based permissions (analyst vs. admin), so every team member can create and update records, while only admins can permanently delete them. A summary dashboard gives an at-a-glance view of open incidents, severity breakdowns, and active investigations across the team.
 
We built this project to practice designing a real-world, role-based application with meaningful relationships between resources — not just a single CRUD model, but three connected entities working together the way a real security tool would.
 
## Getting Started
 
- [Back-End Repository](https://github.com/IDAC1899/cyber-tracking-backend)
- [Front-End Repository](https://github.com/IDAC1899/cyber-tracking-frontend)
### Entity Relationship Diagram
 
![ERD](https://www.image2url.com/r2/default/images/1789570276119-5b1cd3d4-888f-4d56-aaad-4dfc3d1ff0f8.png)
 
[View/edit the full ERD in diagrams.net](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=cyberTracking-erd.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22ERD%22%20id%3D%22cyber-tracking-erd-native%22%3E7Z1blxo3tsc%2FTa%2BVPNhL98ujL%2B3EkziesZ1zZs5Llq50JTR0oGjb8%2BmPqgq6gVIDBoGLQl5ODKJKiKqfdv21Je19hV%2Fdfvlpou5u3o2tG14hYL9c4ddXCGGAZPinKvnalECOWFMymBS2KQOPBR%2BL%2F7r5gXBeOiusm87LmqJyPB6Wxd1qoRmPRs6UK2VqMhl%2FXj3Mj4d2peBODVyr4KNRw0Xpc%2FFY%2Fr%2BFLW%2BackHBY%2FnPrhjcLL4bgvknt2px8LxgeqPs%2BPNSEb6%2Bwq8m43HZvLr98soNq%2Bu3emXePPHpQ4MnblTuckJZlOFntU6a1zMtvy5%2BdOm%2BhM9e3pS3w1AAw0s%2FHpXzmwPl4v38hOpzNSwGo%2FB66Hx15r2blEW4iC%2FmxbeFtdWx9XmvxsPxpP4izK4DJHhe%2FkbdFsOKk1fj28KEFn1Uo2n4593HcMC0nIz%2FcotTR%2BNRVVvT8Hs1nM0bfoXYsG55%2BE1sUNaHNCXVF6z8SPb3rLruL01T5Yvw4WSgfwhX8FV4SeHi3x%2FrSkB1%2FrNpfQWqQzm4%2B9LUPq9m8X2v%2FvPy%2BkM44NOHF69%2BefvbT%2BHl1TW6EuBKkvD6%2BsPrRYvCfWoatdrQULzc%2BvoHhqvpvizdrPnt%2FcmNb105%2BRoOuVkiEM9x%2B%2FxIK10wOa%2BF8%2Be0KZj3Sznvp2reXQYPVT%2FyFF7MkYrjZbhzEFLvLHJkF8xCf7irXpZK13BMSzVZUBZ%2BRHVvRqUqRm4ypyzcq6G6mxb14a%2FrI26Kof1VfR3PykVFi3cvffHF2Z%2Bdsg%2Fnb6VsGXMW3lcd4eOi11bfN1TaDV8q89dgMp6N7BqPa3S%2Fqf88wLuwHjXvxXC4dCQALPypjvxc3A7VyL1Z%2Btw6r2Y1G6udoD4P47r%2F1K1xdv47HwwNjHWS36fhguwFFm%2BTRfgqWZCsgsUJSECWgj78VO48lxEDFgHvKco%2BVJfl5c14Uvy3Yms4v63L5IGl21DRs1b0clw%2Fy8DG21GO7xbA1AaxfqnHZTm%2Bnb%2BZzC8riGJtJ%2BO7T2oycItD1nh5w6%2FJNQnld%2BNiVNZXlr4MfyvrBULXpq8r80Vfwsf34W91%2BCQAOgoND92qqtupafnZTRN1lzbnEQu9B3hIPM3d11WjdxBmThtvNGaGMx3BrE1hBLNwRlmo4YcgRtRoUNu1pefo55uidB%2FvlKkO%2FRw0U2PlKumiHm%2F%2F02CNw5Xzw7pv34RnqhvFbIkMf74ZwpokN7m%2Bdw1QewGwLgt2N4gtUN4ULki1RLRAugGPeW2Pd%2Bzbq1PDcOlGqgzWIdjhaQu6h5buyKEjUHkokA83PXP4XTn89PXOJcNwTYalxhIcF0uqBDTOCOF9xvI7Y%2Fn%2BrizGo2kqMh%2FGqPNaUFoyH6o%2FEpmeYwW1plZYevH6cD4YuRBpyLdKQyoSSEOGlJDces1BTBq2Aeyc7Ztj8Z3M3lKL0TWCcEcz90expwZsY3HQw3aH6hKbNKywdToYLAFYBu5kwL3Xf4bf%2FzYddSkl34bqj0UhF%2BE%2FiYChMcdLpvA4FP7zl1T8JRV2G6o%2FEn%2BIAYcFhV7bmBXMwq6%2Fwm67z0%2FQBMKOQISZUxh5HrNwbQCzhUth4WbTykzcpnOtnJeHD1lJJNcWOBQbsGbqjkPdx3JSjAbJmDtvdx4RgkCIlTeEZwZPxuAH9%2FesmDjbLDD4fVT8HT6pX3%2BaFLep2Dxzhx5HQAOJOcQ65m7Juq%2B3uo%2BgrbovGK0Ews8IZIN5Q1oJGUOsRWA2f0mGtmo6%2FTye7OdgicBxyEN3l%2BoSGzbpvMHWCaKRyNSdg%2FCLQZJQ%2BG2q%2FkgMGgCBYhRiJCLr9DKDJxF%2BPze%2FCwE%2FCa1F4B8f3%2F%2BWis%2BU4m9T9cdaZ2AUhEZz5mj0yZzFX1%2FF3w6zuZCm8PopSy2nnlMLTASxNoHZBKYwgft7%2FM5%2BPpcYjaSnDhMZe%2Bhm4jon%2FPo3m0sVst4JFiD0mcHvJPzQswoaYG7UZM%2Fle72b5ZWEQCSQQ4Dk7R0XJfh28fYJlEDwaUmMYwJbIiP7JiMEZtOXwvS5W1UMU5FxZq4%2B5AmQUABnZMzVl5HrnOLrn6tPQqSo81ZSEltnkBk89Rzvr%2BPPbmLUdL9hcP98fYxT7x2GlrLs67ss6Ye3Sr9QkkD6WamcAMg7H255G7E2gdkGprCBk%2FFwTyPXBuOgp%2B4O1SU2ahpRArjAni%2FGLpm4jiu%2FCCQpld%2BG6o%2Bl%2FISyiFgJqclW73QMXo9mt02IIGVvi1Ej%2BtRIDb9Oq%2FhDV7x6%2FxDR5cXyh2mwTaoHN1R%2FrNAHykKsBZOGx%2FaYZz3YWz3I2HY9yHgCPegI5EZYIhWNzcS1CcyWMYVlNBMXrIR9sZ%2Bli9BxyAN5l%2BpSuwO5V9JrR4mPTb5l7I6D3etwA5MRl1ASbqr%2BWFEyAMcSeKWgUJnAkxH4YlaOUxGYUt1tqv5Y28kFEgoIDJyPzcJldddbdYe3r%2BzDi2Bnh23rsNIAxhQxKraWoE1gNnIpjNzszh6g7iJ0HPJs3aW6xJZNAYmk1Z47GNtMmbHrmLqLIZJQ3W2q%2FlhbJomSgFnBvY05nTOBHVN3EURSqrtN1R%2BJQEGZFNgKRWFE3eX43x2J%2F%2F12ZArr6nD4P7xWI%2FXjXviSxd6xDcHABTtGMHDJq7Gq4lLBmKFrU9jnQUQOBh4bSaTAjDAAGSOWOB8LQdCmsHPP0%2F5Eu73kYOAYUg0o8ZrKzOF35jAHA39cuCcxlgoJgnVsFi1jmYOBb6v%2BWBNtUKtQOVYIx8i8LH14UU7mHXYTJQkGjg1XCkJESTQdURvAztm%2Bs3S17BsM%2FPy3EmnnDLZaMytiawcycB0MBt6%2FzUQu8GeIwdyhTGHng4H3b6%2BQpw46Y4FlLAu7ixJ2O%2Fj8WsZvL2UnjLGYWse1BBHE2gRmE5fCxC1lJr44%2Fx6BgKrAm8PRMMwZuc5tFuqfM484x5FlgcJoEoTM4Cm2idNn9W0%2BJDJQ%2F3x5RnAshMDUxYYcWfL1VvLtEhkIpXDmEUah4iL8p2KSr01gtn0pbJ91UzMp6omLVHycmVMPO4o9A%2BiJpKUZvM4Jv%2F659IBEHHrFuYnGwc0MnkL4QVApv8OkX%2F%2B8fVwRoBjQGKnYbrUs%2FXor%2Fej2neCQp%2FD2EUI8kTo8hnlsdNEmMFu%2FFNZv6sKvKsqvqeA45Jm7S3WpDRsIJp9SJGU0Jl%2BmrnO6LwZJQt23qfqjRagyRiJlDUfRMCuZwSNHB%2Fo1%2FLJa%2FL1ztgiF85wwg5vm1atgHwujqnvWhAx6VIxp%2BE0pDjdVf6yxcwDFEecUJ1kcXpQ4ZLuEjWQJxCG2xmEGqfEGRRBrE5hNZBJxWKpytt8YOILGQRFaTh840hDjtZbQYRNzx2TmOicNY5CkjBJ0%2BsCRxlJAvBFExfeRZwaPLA3f37l53Mi3o%2FvwPC4GqqzxbHTgdDy8X3gOXw3H0%2Bp1LK5kU00apJOGHTp9UElrpBReeM1FLOxQVou9VYs7zCKjRfrng9QiQDLQ5RWXOLaCpk1gtpoprKYJNmIwnuznSjz%2FKWTqLPaeCWddzJWYqeucXuzfFLKUDCtmGVTRXSGZwWPrRb74YJrGW9i%2FqWShGMMaEQx09hZelv7b7i3EGCbQf8JoaaTRAtHYhEqbwGwFU1hBNZ0Wg5Gzn%2FaLwXb%2BqWaANFRwKCorlrk7k53B%2FUs2Aw0EjgW1F11GmCk8xTLCSbVGEzy7QkzdVpdnUNbngN%2Bn4bmMwA9vftkz0l%2Fvksz8GrTLtQ1A2Zdf345MpeqyKsyqcEUV8hSpB9dAWwpjt4LaUzxmK5nCSg6Xru6FqsQ1wB7D2GUMs2T8PpJxDbb3d2Um8tRE1rvvqkWGWT5%2BUxwaIh3HymNgRBaOlyQcd4hDQ2CKHIUIhOEyAgJLFBOMbQKzRUxhEQ%2FLUXj%2BsWgYJ8JRqqiJJq7O2HUsi03%2FItFgA4Sy0BoZXX2YCexYFpv%2BhZzRUiOrOBJ2kSAxq7vLUHdYbld3iy2bB6k75hWHRApDQWzJTJvAbORSGLkDcxS26TgoQ9wO1aXeeMwZQgxhDkEsfmrGrmPqLoZIyhyFG6o%2FVgRpIrw1mBEbyxCXCeyauosgkjRH4Ybqj7VeBgLKAAVMuYgNzDkKO5Kj8NNN5Ymp3M5vp3smKKR4wyzvIkEhX01QCOUGmHdfCygJQ9QRy6NBpNsI9nkEkRMURoYRSRIUYu0UwUZ5zqO72loUdu5h2p8MXJecoNBQzxmU1Pn46vrM4ek4zAkKl6bQhKVKMMVgxvI7Y5kTFC6TSav10lIZGs%2FmdVn68KI8zDtIwyQJCp3WCknrIcOxWbQ2gJ2zfWfpZ9k3QeH5a0DuHYMeOQyiOVczcB1cU9o%2FyUcR0wBCZqGOpUrPFHYqQWH%2FhJ2DDHCroQUiNuTIwu6ShZ1IEZRSh4csBdYYGQ1K2QYwW7gUFm6kbi81PaGkSjviLATR9EiZuM6FGOqfrgPGVitXqCc4tuEiM3iK7eUopydsP465U05wqDzMnryLEnyEbBV8EKbYQu4UQ9J5pqyNLtprEZhtXwrbV%2B47kRYB46CduTtUl9qoQSiF91ATFNslnonrnOKLQZJyd%2FiG6o816vAEEuYJhz6WFD0zeOygkmzxQaqgkm2Gku4C31D9sQYlilCAPeUIxmJeZe3XX%2B23PXwQTDKNCwESVFArgYkuJG0RmK1gCivYvExExplFCsKeUGo0MSQ6hZaR6574611oIOgIhIJQqF0slm5m8BTuvlv1JfyfHpqWunfBf4jEjgMqPOZRA5llX19l3w5pqRFIEUscYaUoZZ6jaC6ZNoHZ%2FqWwfxeeltorIQzW0CoZW1qQqeuc8utfWmpBELTCG%2BFJtnw5LfXZpaUWXHtvAXDaxPjN4rC34nAHnyCiKSJDUiWJBIAroaO7flsEZhOZRBzun5a6B05BDRAkhAhCY7NxmbnOScP%2BOQWlcpRiKsPDM5roKDN4ZGlIr1ozwiv5pl%2BYsrhPNm1y7l5CrT2TMuBq8k6QyxKC2xcG4nVTuV%2BUIc0gRhJ7TGQEsTaB2SAmEYLj2cRc7NJAQDilQEPnYoOPzFz3hGDvlgZSYjB20lkcnR3ODJ4iWUwzO3zohpD%2BLQrETHLkFSKI5NB%2Fl6X7dsgpSFJsCOGaCoSNqTiKINYmMNu%2FFPavGJnCVpf5Ml2ATELDkaXUkZgLMFPXwQAv%2FXMCWqgMoZhTwmLjj0zh98wz%2FfbBQuZkgfE8l01U63i66SwNL1oaihRzw23Wdsk4vUZlNpkpTGZOOh1hbIe80xnGrCJPmXq64W179unM5dF9ijkB9c5bjwVikiAltI9N%2FWUp2VspuchXsylFYZrkItxCKaChTEdXsrYIzBYxhUU8LAF1hI5DHs27VJd6lRewEjFrLGTRdTMZu26lKIwhklAcbqr%2BWEscCIREC0wUiE2vZAI7lqIwgkhKdbep%2BmM5uTmpnr4Qapk3kVyUutslPQhIkYAaSMeBEp666A7jNoHZyKUwcocloD7%2FWNIWOWGcZ0xH95Fk7Dqm7voXSVoCDoRjNoySbSaw%2B%2BqufyGjTSAMaKAlVjkBdXcTUL8d3Qe5WAxU5aGuvM%2FvZiPnJnumokY7pKJma6moH9awHObHM0gG6CCGPrZipk1jnwcTORd1ZESRxF0MHEceac4Yjy3Kb1PYuedqf5KtXnIuakoYU55QQ2AsOlvm8IQc5lzUj%2BZRAw4loVSr2LRGxvKEWOZc1Cv6EEnNuCfGanTx%2BjA7m9eczSmCmAMbDJsQpIplHrN9LQA7Z%2FvO0uVyubmoKZEg3F2LDGMZuPNYZNo%2FyScdpIpTLqGMjogzhTkX9TH5Qx5RqCDjysRGwlnYXbKwS5KLGkvoKYJSYhrLytoGMFu4FBauLMrhpSaj1tBqADlC1sdGqxm5zsUf6p%2BwQ9opIiDxIjqjlhk8xR50mpNRt0N0IOeQdNw7lBXfRSm%2BkyWjhkCFgasU1oOYL69NYLZ9KWzfYbGHzj7qJJaYK%2BgNRNHQz5m6Djr0%2Bhd30mlpqoC7QpHYHG6m8OxjD%2FUvGiWHAhtCmNexmZCsCPurCE%2BVolooCy0mmlIejQvYIjBbxRRWUU2nxWDk7Kf9ltWff3AhWCUBDtgJiaKrCjJ3HdSEvYsk5DyypNqJq31sH2Wm8Htqwhw3aFPgq7ej%2B3ggyqwKL1kVpslgvQbaLlEol3nMVjKFlcwhKNcB2yH%2BZMYwS8ZTIrk98mQmMoed7IZ89BwGvYAFx9Rn4ZiF46pwTJLcBiolOIUMCxtDrE1gtogpLKIvRrYYDfbM4nX2MhFab7hyShAfm9rL1HVuWWH%2FdCF22AiGvNQyFncyM3i6tIYIHJrXsHfST0FADBWEYBajM0u%2Fi5Z%2BSZLXMCKsBN56x2LLV9sEZgOYwgCGnlfOLlX4YcWk4kozR2PCLzOXhd%2FRhZ9yUithAebaZAZPxuD1aBaa9SIUksUH1ddc8UoHPkQTrD7%2FbVwtK%2FxYKRSXzIt95noQuzAgoVXIIhdbfpP1YG%2F1IGVb9SBOElKQOSiAwkEW6ugKrxaB2S6msIt3kyJ0xnK%2FGeMIHIc8jXepLrFh4%2BExKzkFnMTC82bquqcIY5AkVISbqj9W6BhvKSBCARvdaZIZPLYi%2FLWab6904Dtni1BYv%2F45NLV59SrYx8JUPsO5XHxcj5iG35TicFP1x0rzIAnSwjoHZI45fVHicKdM1ylizwBNrOYAAWRi88RtArOJTGEiR%2BPSXaqvEBGqKLdCax5LupqR65wy7J%2BvEFhvgYCAAGMzg3mSuFtOQcqMtBp6%2BRBsJOu%2By9B9bLtTkCCZQPdBgXywspJIFRtatAnMBjCFAZw2kx97Ji6M0HHIc3eX6pLPE2smPMfYqtgu94xdxxIXxhBJqPw2VX80v7TTEjCipYrNEmcCO5a4MIJISnW3qfpjrVMI41%2FLqPA%2B6nLJ6q636m6HgNJEpkhLTZVy3BBOiI0uhWkRmI1cCiNnxrd3Q3fJiamRpE64MKpgIGbbMngd03f9iyodhJ2xnmtos%2Bn7Lp69NBSedwjpyevP49dqYp59%2FGP2J3n%2F6m%2Bt9DM4f7I7O3BLlyaet3o8m5jFUyWMlxXUmlph2%2BsUqtoWCf2CKroZD6rbcP1YunKX0SrKbmRfTCY1itcfAnafxu%2FU6OvVcoZnUB8Wfvm%2Fl9%2F8p3oTBNn87esvyx%2B%2BXmhK96Uo%2F734qvB66azw7vGk6s3inGGh1f24sB%2FGs7Kar2jOforAcqErr%2BoQeoxhjQgGWkUF22YKHyzTxA1VWdyv3qRNJqzFYrio6uvSAXN5%2B9iEf1YFj3RzsqoCBUTLBG49HoJ5bqRHZJsmxE9ncDVFtljvDQ1%2B87M2tWOtIr5eUXN%2FWhUl61LsG7pUf%2FvMjuOV7uKP4jw%2Bid3a8ZDMTfyu%2BJPncumPWP%2Fy52BtC%2F6u%2FaGVez407DnAj1%2B1Nrg7cvdY9Majdg92WPeAuXts6x4Q47X%2BgQOiYiOJEIvDzwkFbO2kLV2r3dR9Hy1VTc%2FB0h%2FUatpp%2BxLapes8Qv7USGGpqzw9RFgllsQHCBGIWbXV5uVN9WoefacpqfprONaruaZkf8%2FGVXl7UPDw0crvWhRW9Tyb1h2%2FWt6Jwd2X5lseTmq%2B90PdR8aj6U1xN100Ilz2ph2rbQvF7QbPhtHvD4OK8pkaFoNR04BmZBRpwKKeYXGiSwHpE5di8b3TOzWKVqSV%2BWtQc%2FPMNDe4qm8y0D%2BAZplEvbFq%2FuLHzd8RsKmW%2BDSl87hLV9foKvQVWcHyGN394dqvnhOO%2BSGg%2BeK3H6szl46qWz8%2FpqoQXEmydIgZW7f8vc%2FrrLkPpy9%2FXJtQ70IvMtVCX6C%2FPlHPorHPl2M0x6usa616BQKz5leb%2BmprVxuI5vRquBBqALfV8yj09nn10%2BbsWAu2f3GoZlr%2FoMW65W2odwdIPYk0L9bq7jT59H1oKR3Ccj%2F6dDNx6ri96IH%2BBD2pae7zot37n%2BpFj4fOe9KNunePfaesK9zQc7Z9Ve43F9lv3o7u3bQsBrU42Kn7xPvOvNYTdZ%2BVVifsRcVyvbkz5c70LULuWzvS91dzy53oWJJutw6VdV3uUhvGRm8W8u7NN3azpilqZovygEdXqh63Grb8qbqq3wWcMjeLm6lu7%2Bp61awc36p6f%2Baw%2BorPRXlTS7%2BqA5rZZNI82Oads6nm3tV%2Bs9mdrSakm%2FofJgbBD%2B72rqw%2FH5VFVeCLybSqw61dsJ37WCisPAWLwj2mHokALQ8exfMV1otqyLpXlySI7R%2F3MpHuT2h8o8f2gAk9zCRHXiGCFvNd5%2BOyZXDVDwr5Fnfn2gl0vt94X78rXAslt7PflazVxNdrSudoLen9P6D61x9%2F%2Fut%2F7v%2F46eP1L%2F%2F3%2FvUz2P0e8B2n9Fb6x3J0%2B%2BaZ9RDg%2Flw6CsNr%2FQRsnvpbP55K8Zzyq917Smvue%2F0n7T3XB8TaU2HvjhLeTsaVink8fKLubt6FJ3d1xP8D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)
 
### Component Hierarchy
 
![Component Hierarchy](https://www.image2url.com/r2/default/images/1789123846852-41cbd6ce-8eb4-4e81-8f93-b4bc640d0fb1.png)
 
[View/edit the full Component Hierarchy in diagrams.net](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=cyberTracking-component-hierarchy.drawio&dark=0#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Component%20Hierarchy%22%20id%3D%22cyber-tracking-component-hierarchy-teal%22%3E7Zxbc5s4FMc%2FjWd2H9rRBST0mDrpZXrZTtKZbvelI6GDzRajDCYX76dfYYMNVrJrEzC9kJegowug3xHnjyw0odPF%2FatMXs%2FfGw3JhCB9P6HnE0II8qn9V1hWGwv2MdpYZlmsS9vOcBX%2FA6WxKnYTa1g2CubGJHl83TSGJk0hzBs2mWXmrlksMknzrNdyBo7hKpRJZX1Od%2FbPsc7npZ0jtMt4DfFsXp0cVTkLWZUuDcu51OauZqIXEzrNjMk3R4v7KSRFB1Zds6n38pHc7RVnkOaHVMjj3N6XU6lsZ5mvqrvO4d7mvZjni8QasD2MTJqXdLCo0mWFIl8m8Sy1xwlERc1byPLY9uJZaV7EWhdl1%2FWmJjHZ%2BkQURQx8VtpfykWcFI4yNYs4tFd0JdOl%2Fff%2ByhbYXOOtTG7Ka5wQlqwv0l4%2Bm%2BXrIhtL0VZlm355cXFpK366PJu%2BffPhlT2cXJBJgCbCs8fTP95%2F%2FOPDxYdP9vj1m4vLs8vp6y9VO7Yj603VzPVzri%2FL3i7c13qz7P9XYBaQZytbZF5zEVr6w93On7hf2spWgjJZjhtRJmXpzrNtwzvc9qAk%2FjD9UKEIlGZIEBoc4gWZuUk1FLWRvdO7eZzD1bUMi9w7O9z3HCROkhrYl%2Bs%2Fa1%2FmmfkGDyHf5FRjih7iBDUvJMj1JhwRjxb27UBbu2YWVp7rPeRIZx8%2FtqLIXYoUNSn6oolx%2B1h7EkfEaBghHFIFB43m75rjmkknHD%2FIW1umK5Q4aKLEtImSsi5QEokUi2iEQsWOQ4mPRql5hED%2BECjfmVmc9kWS%2Bn2Q1CqQgUDCjks9ktySvIRZvMyht2Hp8z5gguaAGWLIk3x8wm5hfsxMbkU26Etzk0NXSInXRMpFH0h9bseNJhozRTbNgXakv8vY3GQhPKqfai5QtFYJYpPlczMzqUwudtYXzRFfcwhI9VnxqmKTKjHhtyN8gRziC3Af538WvvncL1NfqjPb4%2FP70m3XiVWVSG0H1yoVyS%2F1vF21daqqt%2BmXXGYzyB%2BVKw0V%2F5DHZJDIPL5t4nlaoLWAsECRF3p4xH9K%2FK7EGQC%2F1trjilKp8Ij%2FpPhdXTQAfuFRYB4Bojw14j8lfldJDYE%2FBCFQqImMjnxh%2Fqm1%2BblczpWRWTUun67k9qY%2FPNJUcj7pQsnhUGomaKQiIUeaW5pv0jDWthuWfdHcznh3SjPUSIPV%2FEFUvZaPNG3q0zwD2R9LjFgfMD2qg4AJFgb%2BOAlSH5q3sMzjmQ1rJu2OKdljynphKgjj9p4BhxXTo7WTKwJG7XSAdnJlywDaCQXEA%2BCUCxqO%2BE%2BJ39U5A%2BD3mBBEKkS14iP%2BU%2BJ3hdEQo59QT3mIhVL5I%2F5T4nel1AD4pY8kRFJjycMfX89V2Dt71XoXL%2FOu1Bzm%2B79S%2Bg0xxzr5FQRJpBUNAkSDEagL9KXJFn0B9ffUeTdA7eMVCQkEBfAfz%2BNfFug55DJOOnvl2mfK%2FT6YQugpwQjzddXc0UHX1Y5j0D0g6LrxbhDJzbUEKT0I5Ij%2FlPjd6DgEfgCr%2BBWNmCQj%2FlPid2PpAPgp59SjEfI8%2BAlWBHYW0Dfz4X0Kbry%2FwrObYC6Z5DRgGjHmjzz3ePapt4XXB07bw%2FbJjJB9vkYjzj2cPattTEkfSLVPitdtrrDULQOuO1c3BtwDAq4b6wYIuJFAfhBpgq0HjPhPid8NjYPIbeEV3LSnohH%2FKfG7oXQA%2FAEnQqiQY1J9qjrG88neioVeVbffS0xnQRQhrBkPfoYVf%2F1g7VN8Y94LVsGY1FxwxfCRX7D%2BOlj7FuEC9zJgoxCCwBdU07YL9N1fTMcwfEAYdiPgEGFYkYhLKiUKR%2Fwnxe9GygHwM6apEiQEBm1XGY34260xdCLqEB%2FnBV4YoEDLgB45qfY9fm7bWVifmjSKs8U5JFB8bYt%2B2wjx9Y4zxZlNmqx%2BbxXnAzfOO6uJMWouQAk62YOEcQFeJLVkuu2Pm%2B6PtONIP2Cku4NsgJHOwVOhJ8JAkrb43UnDEf8Pg18xGWCkGONtl5O6cnXE%2F6Pgx5hxGWqFtrMD%2Fb2%2Bt4rzj4Tn4KHo3CrwbqNsLfJ6buRtBF7RSeCNCMjAY4p5nj6k7x%2FZAq625Vtd8xQ9VG0BF9pWIXNF0BP2ensLq1bd%2FcBGa%2F%2FX27vt%2B562LjNSgDQHzccdZBqSdnFt0qIf2uBkB8hWto%2FT72Ti0Y4fbCWnjuBInN%2FjxGN3uzu13geoDcrtAp2noMTJV%2FIXuV4tpPjkP4P4%2FJ%2BvL57RdmKktp9mSxFS9PiuzDtjrsue%2FxvyfFX2vbzJTdNj4jSFrCj9Wa6uTVx89L3TEseqDFctbO%2Bre1Fgk7v9Ttd5tZ1j6cW%2F%3C%2Fdiagram%3E%3C%2Fmxfile%3E)
 
### Wireframes
- Sign In / Sign Up wireframe

![Sign In / Sign Up wireframe](https://www.image2url.com/r2/default/images/1789123962641-b6213c08-169c-474d-a16a-5b05423b68b3.png)

- Incidents / Threats / Investigations wireframe

![Incidents / Threats / Investigations wireframe](https://www.image2url.com/r2/default/images/1789124019107-c64d5b3b-6a10-4ba1-9ea9-ffc2cb479e10.png)
 
[View/edit the full wireframes in Excalidraw](https://excalidraw.com/#json=rjRiymKEOu-zMSIZnXn6w,g0Is113A9Oo_Ugg2iJhtKQ)
 
### User Stories
 
**Authentication**
- As a guest, I can create an account.
- As an analyst or admin, I can log in with my username and password.
- As an analyst or admin, I can log out.

**Incidents — Dana**
- As an analyst or admin, I can create, view, and update an incident.
- As an admin, I can delete an incident — analysts cannot, so records stay a reliable audit trail.

**Threats — Isa**
- As an analyst or admin, I can create, view, and update a threat linked to an incident.
- As an admin, I can delete a threat — analysts cannot, so records stay a reliable audit trail.

**Investigations — Muneer**
- As an analyst or admin, I can create, view, and update an investigation linked to an incident and assigned to a user.
- As an admin, I can delete an investigation — analysts cannot, so records stay a reliable audit trail.

**Dashboard**
- As an analyst or admin, I can view a dashboard summarizing counts across incidents, threats, and investigations.
## Technologies Used
 
- React
- React Router
- Node.js
- Express
- MongoDB / Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Vite
- CSS (Flexbox / Grid)
## Data Models
 
- **User** — shared auth model (username, hashedPassword, name, email, role)
- **Incident** (Dana) — title, description, severity, status, category, assignedTo
- **Threat** (Isa) — name, type, value, severity, status, source, incident
- **Investigation** (Muneer) — title, incident, assignedTo, findings, status, priority, 

notes
See the [ERD](#entity-relationship-diagram) above for full field types and relationships.
 
## Attributions
 
- No external libraries or assets requiring attribution were used beyond standard npm packages (React, React Router, Express, Mongoose, etc.)

## API Routes
 
### Auth — Shared
 
| Method | Route | Success | Failure |
|---|---|---|---|
| POST | /auth/sign-up | 201 `{ user, token }` | 409 `{ err: "Invalid input" }` |
| POST | /auth/sign-in | 200 `{ token }` | 401 `{ err: "Invalid credentials." }` |
| GET | /auth/sign-out | 200 `{ message: "Signed out successfully" }` | 401 `{ err: "Login Required" }` |
| GET | /auth/me | 200 `{ user }` | 401 `{ err: "Login Required" }` |
 
### Incidents — Dana
 
| Method | Route | Success | Failure |
|---|---|---|---|
| POST | /incidents | 201 `{ incident }` | 400 `{ err: "Invalid value..." }` |
| GET | /incidents | 200 `{ incidents: [...] }` | 401 `{ err: "Unauthorized" }` |
| GET | /incidents/:id | 200 `{ incident }` | 404 `{ err: "Incident not found" }` |
| PUT | /incidents/:id | 200 `{ incident }` | 404 `{ err: "Incident not found" }` |
| DELETE | /incidents/:id *(admin only)* | 200 `{ message: "Incident deleted" }` | 403 `{ err: "Forbidden..." }` |
 
### Threats — Isa
 
| Method | Route | Success | Failure |
|---|---|---|---|
| POST | /threats | 201 `{ threat }` | 400 `{ err: "Invalid value..." }` |
| GET | /threats | 200 `{ threats: [...] }` | 401 `{ err: "Unauthorized" }` |
| GET | /threats/:id | 200 `{ threat }` | 404 `{ err: "Threat not found" }` |
| PUT | /threats/:id | 200 `{ threat }` | 404 `{ err: "Threat not found" }` |
| DELETE | /threats/:id *(admin only)* | 200 `{ message: "Threat deleted" }` | 403 `{ err: "Forbidden..." }` |
 
### Investigations — Muneer
 
| Method | Route | Success | Failure |
|---|---|---|---|
| POST | /investigations | 201 `{ investigation }` | 400 `{ err: "Invalid value..." }` |
| GET | /investigations | 200 `{ investigations: [...] }` | 401 `{ err: "Unauthorized" }` |
| GET | /investigations/:id | 200 `{ investigation }` | 404 `{ err: "Investigation not found" }` |
| PUT | /investigations/:id | 200 `{ investigation }` | 404 `{ err: "Investigation not found" }` |
| DELETE | /investigations/:id *(admin only)* | 200 `{ message: "Investigation deleted" }` | 403 `{ err: "Forbidden..." }` |
 
## Next Steps
 
- Add a comments/notes thread on individual incidents
- Add email notifications when a new investigation is assigned
- Add ownership-based edit/delete restrictions on top of role-based permissions
- Add filtering and search across incidents, threats, and investigations
- Add a full audit log of status changes
 
