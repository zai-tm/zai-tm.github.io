set host=https://zai-tm.github.io/signpacks/waypoint/
del *.jpg.loc
del *.webm.loc
for /r %%a in (*jpg) do @echo %host%%%~nxa > %%~nxa.loc
for /r %%a in (*.webm) do @echo %host%%%~nxa > %%~nxa.loc