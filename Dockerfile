FROM python:3.8
RUN apt-get update && apt-get install -y \
    bzr \
    cvs \
    git \
    vim \
    mercurial \
    subversion \
    sudo

ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/

# Pipenvをインストール
RUN pip install --upgrade pip && pip install pipenv

RUN pip install -r requirements.txt

ADD . /code/