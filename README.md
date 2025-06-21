# A simple Vue3 template

# Includes : 
    - unplugin-vue-router
    - unplugin-vue-components
    - @vueuse/core
    - pinia

# How to use

**clone the repository :**

```bash
git clone https://github.com/timinh/template_vue.git my_project && rm -Rf my_project/.git
```

**then cd into the project folder :**

```bash
cd my_project
```

update the **APP_NAME** defined in the **deployments/local/.env** file

start the docker stack : 

**linux :**
```bash
make start
```
**windows**

```dos
docker compose up -d -f deployments/local/compose.yaml
```
Or in your IDE, right click on the **compose.yaml** in the *deployments/local* folder and select **compose up**