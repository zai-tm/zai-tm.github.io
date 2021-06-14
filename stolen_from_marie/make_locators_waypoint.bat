set host=https://zai-tm.github.io/skinpacks/waypoint/
del *.jpg.loc
del *.webm.loc
for /r %%a in (*.png) do @echo %host%%%~nxa > %%~nxa.loc
for /r %%a in (*.webm) do @echo %host%%%~nxa > %%~nxa.loc