# Deno

A secure runtime for JavaScript and TypeScript.

### Installation

Installing [Chocolatey](https://chocolatey.org/docs/installation): Run PowerShell as Administration 
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Install [deno](https://deno.land/#installation) with Chocolatey (Windows):
```
choco install deno
```

### Running deno script 


**Running file**
```
deno run https://deno.land/std/examples/welcome.ts
```

**From where the code is coming**
```
curl https://deno.land/std/examples/welcome.ts
```

**Allow permission**

```
deno run --allow-read --allow-net https://deno.land/std/http/file_server.ts
```

now check __http://127.0.0.1:4507/__

**Install deno script**
```
deno install --allow-read --allow-net https://deno.land/std/http/file_server.ts
```
now go to __C:\Users\Shayon\.deno\bin__ and run file server

**Run a local file**
```
deno run Hello.ts
```




