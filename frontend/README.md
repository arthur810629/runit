### Требования

- Node.js 24 LTS
- Yarn 1 (Classic)

### Установка зависимостей

```bash
cd frontend && make install
```

или `make install` из `~/frontend`.

### Локальный запуск

1. Поднять backend из корня репозитория (порт `3001`):

```bash
yarn
yarn dev
```

2. Поднять frontend (порт `3000`):

```bash
cd frontend
make install
make start
```
