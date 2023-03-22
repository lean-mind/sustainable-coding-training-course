# Aircraft Screensaver Kata

In this kata the attendees will take a look at the implemented code and will refactor it based on what they have
learnt during the previous sessions.

This is an exercise to learn unit testing with Python. It is also a good exercise
to learn about design principles and TDD.

- **Estimated time:** 2 hours
- **Format:** Pairs
- **Technologies:** Python


## Install locally

Requires python3.10 or higher.

### Create virtual env for python3.10

Move to the root folder of this repo and type:

`python3.10 -m venv venv`

### Install dependencies

`source venv/bin/active`

`pip install -r requirements.txt`


## Run unit tests with Docker

If you do not want to install the dependencies in your machine, you can implement code in your IDE anyway and run
the tests through a docker container.

First, you need to build the image replacing `<name-image>` with the name you want. To do that, run in your terminal 
the command:

```bash
docker build -t <name-image> -f Dockerfile .
```

Afterwards, you need to run a container from the image you have just created. Run the following command in your 
terminal replacing the name of the image you created in the previous step and replace `<name-container>` with name
you want to give to your container:

```bash
docker run --name <name-container> -it --rm -v $PWD/:/app/ <name-image>
```

Now you are ready to run the tests. Go to the docker terminal and run the command below to run all tests in the project:

```bash
python -m unittest tests/*.py
```

If you just want to run a specific test file, you can run the following command replacing the <test-file-name> with the
name of that file:

```bash
python -m unittest tests/<test-file-name>.py
```
