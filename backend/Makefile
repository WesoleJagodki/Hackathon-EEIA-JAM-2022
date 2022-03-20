APP_PATH = webapp/



migrate:
	python ./webapp/manage.py migrate

makemigrations:
	python ./webapp/manage.py makemigrations

run:
	python ./webapp/manage.py runserver

lint:
	python -W ignore -m autoflake --in-place --recursive --ignore-init-module-imports --remove-duplicate-keys --remove-unused-variables --remove-all-unused-imports $(APP_PATH)
	python -m black $(APP_PATH)
	python -m isort $(APP_PATH)
	python -m mypy $(APP_PATH) --ignore-missing-imports

